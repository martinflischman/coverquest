import React from "react";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for books"
          className="input input-primary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="ml-1 btn btn-primary">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;
