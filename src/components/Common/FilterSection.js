import React from "react";

const FilterSection = ({ filters, onFilterChange }) => {
  const handleFilterChange = (filterType, value) => {
    onFilterChange({
      ...filters,
      [filterType]: value
    });
  };

  return (
    <div className="filter-section">
      <h4>Filter Properties</h4>
      <div className="filters-grid">
        <select 
          value={filters.type} 
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="filter-select"
        >
          <option value="">All Types</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="studio">Studio</option>
          <option value="house">House</option>
        </select>

        <select 
          value={filters.priceRange} 
          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          className="filter-select"
        >
          <option value="">Any Price</option>
          <option value="0-100000">$0 - $100,000</option>
          <option value="100000-300000">$100,000 - $300,000</option>
          <option value="300000-500000">$300,000 - $500,000</option>
          <option value="500000+">$500,000+</option>
        </select>

        <select 
          value={filters.bedrooms} 
          onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
          className="filter-select"
        >
          <option value="">Any Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4+">4+ Bedrooms</option>
        </select>

        <input
          type="text"
          placeholder="Location..."
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          className="filter-input"
        />
      </div>
    </div>
  );
};

export default FilterSection;