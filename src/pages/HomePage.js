import React from "react";
// Remove the unused Link import
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Property</h1>
          <p>Discover the perfect home from thousands of properties across the city</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>10,000+</h3>
              <p>Properties</p>
            </div>
            <div className="stat">
              <h3>5,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="property-types">
        <h2 className="section-title">Property Types</h2>
        <div className="types-grid">
          <div className="type-card">
            <div className="type-icon">
              <i className="fas fa-building"></i>
            </div>
            <h4>Apartments</h4>
          </div>
          <div className="type-card">
            <div className="type-icon">
              <i className="fas fa-home"></i>
            </div>
            <h4>Villas</h4>
          </div>
          <div className="type-card">
            <div className="type-icon">
              <i className="fas fa-warehouse"></i>
            </div>
            <h4>Commercial</h4>
          </div>
          <div className="type-card">
            <div className="type-icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h4>Plots</h4>
          </div>
          <div className="type-card">
            <div className="type-icon">
              <i className="fas fa-hard-hat"></i>
            </div>
            <h4>New Projects</h4>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="user-selection">
        <h2 className="section-title">Choose Your Role</h2>
        <div className="cards-grid">
          <Card 
            icon="fas fa-user-shield" 
            title="Admin" 
            description="Manage properties, users, and system settings"
            loginPath="/admin_login" 
          />
          <Card 
            icon="fas fa-user" 
            title="User" 
            description="Find and manage your dream properties"
            loginPath="/user_login" 
            signupPath="/user_signup" 
          />
          <Card 
            icon="fas fa-store" 
            title="Retailer" 
            description="List and manage your properties"
            loginPath="/retailer_login" 
            signupPath="/retailer_signup" 
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Verified Properties</h3>
              <p>Every property is thoroughly verified for authenticity and legal clearance</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-bolt"></i>
              <h3>Instant Response</h3>
              <p>Get immediate responses from property owners and agents</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-search"></i>
              <h3>Smart Search</h3>
              <p>Advanced filters to find exactly what you're looking for</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Round the clock customer support for all your queries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;