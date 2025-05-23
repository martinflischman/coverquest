// App.jsx
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";
import Pagination from "./components/Pagination";

function App() {
  // State hooks for handling app data and UI
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show "Back to top" button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handles the initial search
  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);
    setPage(1);
    setQuery("");

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${searchTerm}&page=1`
      );
      const data = await res.json();

      setBooks(data.docs);
      setTotalPages(Math.ceil(data.numFound / 100));
      setQuery(searchTerm);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetches books for a specific page
  const fetchBooksForPage = async (pageNumber) => {
    setLoading(true);
    setError(null);
    setPage(pageNumber);

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${query}&page=${pageNumber}`
      );
      const data = await res.json();

      setBooks(data.docs);
      setTotalPages(Math.ceil(data.numFound / 100));
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base-200 min-h-screen px-2 sm:px-4 relative pb-10">
      {/* App Title & Tagline */}
      <div className="text-center pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content mb-2">
          📚 CoverQuest
        </h1>
        <p className="text-sm sm:text-base text-base-content/70 px-4">
          Search and explore books from the Open Library
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-4 text-sm sm:text-lg text-white font-semibold bg-red-500 rounded mx-2">
          {error}
        </div>
      )}

      {/* No Results Message */}
      {!loading && hasSearched && books.length === 0 && (
        <div className="text-center py-4 text-warning font-medium">
          No results found.
        </div>
      )}

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-10 pb-4">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>

      {/* Pagination Controls */}
      {books.length > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={fetchBooksForPage}
        />
      )}

      {/* Scroll-to-top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn btn-circle fixed bottom-6 right-4 sm:right-6 bg-black text-white shadow-lg hover:opacity-90 z-10"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
