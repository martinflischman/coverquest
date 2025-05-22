// SearchBar.jsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ query, setQuery, onSearch }) {
  const [input, setInput] = useState(query || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input);
    setInput(""); // Clear the input field after search
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center mt-8 mb-10 px-4"
    >
      <div className="flex items-center bg-base-100 border border-base-300 rounded-full shadow-sm overflow-hidden max-w-xl w-full">
        {/* Icon */}
        <div className="px-4 text-base-content/60">
          <FaSearch />
        </div>

        {/* Input field */}
        <input
          type="text"
          placeholder="Search by title, author, or topic"
          className="flex-grow bg-transparent focus:outline-none py-3 px-2 text-base text-base-content placeholder:text-base-content/40"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Search button */}
        <button
          type="submit"
          className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
