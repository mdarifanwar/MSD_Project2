import React, { useState } from "react";
import PropertyList from "../components/Property/PropertyList";

const PropertiesPage = () => {
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    bedrooms: '',
    location: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="properties-page">
      {/* Page Header */}
      <div className="properties-header">
        <div className="container">
          <h1>Browse Properties</h1>
          <p>Find your perfect home from our extensive collection</p>
        </div>
      </div>

      <div className="properties-container">
        {/* Filters Sidebar */}
        <div className="filters-sidebar">
          <h3>Filter Properties</h3>
          
          <div className="filter-group">
            <h4>Property Type</h4>
            <select 
              value={filters.type} 
              onChange={(e) => setFilters({...filters, type: e.target.value})}
              className="filter-select"
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="house">House</option>
              <option value="studio">Studio</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>Price Range</h4>
            <select 
              value={filters.priceRange} 
              onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              className="filter-select"
            >
              <option value="">Any Price</option>
              <option value="0-100000">$0 - $100,000</option>
              <option value="100000-300000">$100,000 - $300,000</option>
              <option value="300000-500000">$300,000 - $500,000</option>
              <option value="500000+">$500,000+</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>Bedrooms</h4>
            <select 
              value={filters.bedrooms} 
              onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
              className="filter-select"
            >
              <option value="">Any Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4+">4+ Bedrooms</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>Location</h4>
            <input
              type="text"
              placeholder="Enter location..."
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="filter-input"
            />
          </div>

          <button 
            className="btn-primary"
            onClick={() => setFilters({
              type: '',
              priceRange: '',
              bedrooms: '',
              location: ''
            })}
          >
            Clear Filters
          </button>
        </div>

        {/* Main Content */}
        <div className="properties-main">
          {/* Search Bar */}
          <div className="properties-search-bar">
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Search by location, property type, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">
                <i className="fas fa-search"></i>
                Search
              </button>
            </div>
          </div>

          {/* Properties List */}
          <PropertyList filters={filters} searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;