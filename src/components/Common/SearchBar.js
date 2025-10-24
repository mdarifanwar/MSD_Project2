import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search by location, property type, or keywords..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      <button className="btn-primary">
        Search
      </button>
    </div>
  );
};

export default SearchBar;