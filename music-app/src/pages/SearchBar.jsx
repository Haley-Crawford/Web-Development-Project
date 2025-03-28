import React, { useState } from "react";
import './components.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        style={{ padding: "8px", width: "200px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ padding: "8px 12px", cursor: "pointer" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;