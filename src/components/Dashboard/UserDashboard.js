import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Common/LoadingSpinner";

const UserDashboard = () => {
  const [userData, setUserData] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [recentViews, setRecentViews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUserData({
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 234 567 8900",
        memberSince: "January 2024"
      });
      
      setFavorites([
        { id: 1, title: "Luxury Apartment", price: "$500,000", image: "https://via.placeholder.com/150" },
        { id: 2, title: "Modern Villa", price: "$1,200,000", image: "https://via.placeholder.com/150" }
      ]);
      
      setRecentViews([
        { id: 3, title: "Cozy Studio", price: "$250,000", image: "https://via.placeholder.com/150" },
        { id: 4, title: "Family House", price: "$750,000", image: "https://via.placeholder.com/150" }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner text="Loading User Dashboard..." />;
  }

  return (
    <div className="dashboard user-dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, {userData.name}!</h1>
        <p>Member since {userData.memberSince}</p>
      </div>

      <div className="dashboard-content">
        {/* User Info Sidebar */}
        <div className="user-sidebar">
          <div className="user-profile">
            <div className="profile-image">
              <i className="fas fa-user-circle"></i>
            </div>
            <h3>{userData.name}</h3>
            <p>{userData.email}</p>
            <p>{userData.phone}</p>
            <button className="btn-secondary">
              <i className="fas fa-edit"></i>
              Edit Profile
            </button>
          </div>

          <div className="quick-links">
            <h4>Quick Links</h4>
            <Link to="/user/favorites" className="quick-link">
              <i className="fas fa-heart"></i>
              My Favorites
            </Link>
            <Link to="/user/searches" className="quick-link">
              <i className="fas fa-search"></i>
              Saved Searches
            </Link>
            <Link to="/user/alerts" className="quick-link">
              <i className="fas fa-bell"></i>
              Price Alerts
            </Link>
            <Link to="/user/settings" className="quick-link">
              <i className="fas fa-cog"></i>
              Settings
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="user-main-content">
          {/* Favorites Section */}
          <section className="dashboard-section">
            <div className="section-header">
              <h2>My Favorites</h2>
              <Link to="/user/favorites" className="view-all">View All</Link>
            </div>
            <div className="properties-grid mini-grid">
              {favorites.map(property => (
                <div key={property.id} className="property-mini-card">
                  <img src={property.image} alt={property.title} />
                  <div className="property-mini-info">
                    <h4>{property.title}</h4>
                    <p>{property.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recently Viewed */}
          <section className="dashboard-section">
            <div className="section-header">
              <h2>Recently Viewed</h2>
              <Link to="/properties" className="view-all">Browse More</Link>
            </div>
            <div className="properties-grid mini-grid">
              {recentViews.map(property => (
                <div key={property.id} className="property-mini-card">
                  <img src={property.image} alt={property.title} />
                  <div className="property-mini-info">
                    <h4>{property.title}</h4>
                    <p>{property.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Properties */}
          <section className="dashboard-section">
            <div className="section-header">
              <h2>Recommended For You</h2>
            </div>
            <div className="recommendation-actions">
              <button className="btn-primary">
                <i className="fas fa-home"></i>
                Browse Properties
              </button>
              <button className="btn-secondary">
                <i className="fas fa-search"></i>
                Custom Search
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;