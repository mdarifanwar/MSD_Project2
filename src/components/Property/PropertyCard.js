import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      {property.featured && <div className="featured-badge">Featured</div>}
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-price">{property.price}</div>
      </div>
      
      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-location">
          <i className="fas fa-map-marker-alt"></i>
          {property.location}
        </p>
        
        <div className="property-features">
          <span>
            <i className="fas fa-bed"></i>
            {property.bedrooms} beds
          </span>
          <span>
            <i className="fas fa-bath"></i>
            {property.bathrooms} baths
          </span>
          <span>
            <i className="fas fa-ruler-combined"></i>
            {property.area}
          </span>
        </div>
        
        <div className="property-actions">
          <button className="btn-primary">
            <i className="fas fa-eye"></i>
            View Details
          </button>
          <button className="btn-secondary">
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;