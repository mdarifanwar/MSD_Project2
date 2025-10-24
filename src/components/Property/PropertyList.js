import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ filters, searchTerm }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockProperties = [
      {
        id: 1,
        title: "Luxury Apartment in City Center",
        price: "$500,000",
        type: "Apartment",
        bedrooms: 3,
        bathrooms: 2,
        area: "1800 sq ft",
        location: "Downtown",
        image: "https://via.placeholder.com/400x300/1a73e8/ffffff?text=Luxury+Apartment",
        featured: true
      },
      {
        id: 2,
        title: "Modern Villa with Pool",
        price: "$1,200,000",
        type: "Villa",
        bedrooms: 4,
        bathrooms: 3,
        area: "3200 sq ft",
        location: "Suburb",
        image: "https://via.placeholder.com/400x300/ff6b00/ffffff?text=Modern+Villa",
        featured: true
      },
      {
        id: 3,
        title: "Cozy Studio Apartment",
        price: "$250,000",
        type: "Studio",
        bedrooms: 1,
        bathrooms: 1,
        area: "800 sq ft",
        location: "City Center",
        image: "https://via.placeholder.com/400x300/34a853/ffffff?text=Cozy+Studio",
        featured: false
      },
      {
        id: 4,
        title: "Spacious Family House",
        price: "$750,000",
        type: "House",
        bedrooms: 4,
        bathrooms: 2,
        area: "2400 sq ft",
        location: "Residential Area",
        image: "https://via.placeholder.com/400x300/9334e6/ffffff?text=Family+House",
        featured: false
      }
    ];

    // Simulate API delay
    setTimeout(() => {
      setProperties(mockProperties);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading properties...</p>
      </div>
    );
  }

  return (
    <div className="property-list">
      <div className="properties-grid">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      
      {properties.length === 0 && (
        <div className="no-properties">
          <h3>No properties found</h3>
          <p>Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  );
};

export default PropertyList;