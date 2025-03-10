import React, { useState } from "react";
import "../styles/Search.css";


const Search = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder={placeholder || "Search..."}
        className="search-input"
      />
    </div>
  );
};

export default Search;
