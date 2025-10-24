import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Common/LoadingSpinner";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProperty({
        id: parseInt(id),
        title: "Luxury Apartment in City Center",
        description: "This stunning luxury apartment offers breathtaking city views and premium amenities. Located in the heart of downtown, it features high-end finishes, smart home technology, and access to exclusive building amenities including rooftop pool, fitness center, and 24/7 concierge service.",
        price: "$500,000",
        type: "Apartment",
        bedrooms: 3,
        bathrooms: 2,
        area: "1800 sq ft",
        location: "Downtown",
        address: "123 Luxury Lane, Downtown City",
        yearBuilt: 2022,
        features: ["Parking", "Swimming Pool", "Gym", "Security", "Air Conditioning", "Balcony", "Furnished"],
        images: [
          "https://via.placeholder.com/800x500/004466/ffffff?text=Living+Room",
          "https://via.placeholder.com/800x500/006688/ffffff?text=Kitchen",
          "https://via.placeholder.com/800x500/0088aa/ffffff?text=Bedroom",
          "https://via.placeholder.com/800x500/00aacc/ffffff?text=Bathroom",
          "https://via.placeholder.com/800x500/00ccee/ffffff?text=View"
        ],
        contact: {
          name: "John Smith",
          phone: "+1 234 567 8900",
          email: "john@eliteproperties.com",
          company: "Elite Properties"
        },
        postedDate: "2024-01-15",
        views: 245
      });
      setLoading(false);
    }, 1500);
  }, [id]);

  if (loading) {
    return <LoadingSpinner text="Loading Property Details..." />;
  }

  if (!property) {
    return (
      <div className="property-not-found">
        <h2>Property Not Found</h2>
        <p>The property you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/properties')} className="btn-primary">
          Browse Properties
        </button>
      </div>
    );
  }

  return (
    <div className="property-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <button onClick={() => navigate('/properties')} className="breadcrumb-link">
            Properties
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{property.title}</span>
        </nav>

        {/* Image Gallery */}
        <div className="property-gallery">
          <div className="main-image">
            <img src={property.images[activeImage]} alt={property.title} />
          </div>
          <div className="image-thumbnails">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={activeImage === index ? 'active' : ''}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>

        <div className="property-details-content">
          {/* Main Content */}
          <div className="property-main-info">
            <h1>{property.title}</h1>
            <p className="property-location">
              <i className="fas fa-map-marker-alt"></i>
              {property.location} • {property.address}
            </p>
            <p className="property-price">{property.price}</p>

            {/* Key Features */}
            <div className="key-features">
              <div className="feature">
                <i className="fas fa-bed"></i>
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="feature">
                <i className="fas fa-bath"></i>
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="feature">
                <i className="fas fa-ruler-combined"></i>
                <span>{property.area}</span>
              </div>
              <div className="feature">
                <i className="fas fa-building"></i>
                <span>{property.type}</span>
              </div>
            </div>

            {/* Description */}
            <div className="property-description">
              <h3>Description</h3>
              <p>{property.description}</p>
            </div>

            {/* Features & Amenities */}
            <div className="property-features-list">
              <h3>Features & Amenities</h3>
              <div className="features-grid">
                {property.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <i className="fas fa-check"></i>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="property-details-list">
              <h3>Property Details</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <strong>Property Type:</strong>
                  <span>{property.type}</span>
                </div>
                <div className="detail-item">
                  <strong>Year Built:</strong>
                  <span>{property.yearBuilt}</span>
                </div>
                <div className="detail-item">
                  <strong>Posted Date:</strong>
                  <span>{property.postedDate}</span>
                </div>
                <div className="detail-item">
                  <strong>Views:</strong>
                  <span>{property.views}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Contact & Actions */}
          <div className="property-sidebar">
            <div className="contact-card">
              <h3>Contact Agent</h3>
              <div className="agent-info">
                <div className="agent-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="agent-details">
                  <h4>{property.contact.name}</h4>
                  <p>{property.contact.company}</p>
                </div>
              </div>
              <div className="contact-actions">
                <a href={`tel:${property.contact.phone}`} className="btn-primary">
                  <i className="fas fa-phone"></i>
                  Call Now
                </a>
                <a href={`mailto:${property.contact.email}`} className="btn-secondary">
                  <i className="fas fa-envelope"></i>
                  Send Email
                </a>
                <button className="btn-secondary">
                  <i className="fas fa-heart"></i>
                  Save Property
                </button>
                <button className="btn-secondary">
                  <i className="fas fa-share"></i>
                  Share
                </button>
              </div>
            </div>

            <div className="schedule-tour">
              <h4>Schedule a Tour</h4>
              <button className="btn-primary full-width">
                <i className="fas fa-calendar"></i>
                Book Viewing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;