import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './components.css';

const SearchBar = ({ searchResults, setSearchResults }) => {
  const [query, setQuery] = useState("");
  const nav = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    nav('/search');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        style={{ padding: "8px", width: "200px", borderRadius: "4px", border: "1px solid #ccc" }}
        onKeyDown={(e) => {
          if(e.key == "Enter"){
            handleSubmit()
          };
        }}
      />
      <button type="submit" style={{ padding: "8px 12px", cursor: "pointer" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;