import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Common/LoadingSpinner";

const RetailerDashboard = () => {
  const [retailerData, setRetailerData] = useState({});
  const [properties, setProperties] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRetailerData({
        companyName: "Elite Properties",
        email: "contact@eliteproperties.com",
        phone: "+1 234 567 8900",
        rating: "4.8"
      });
      
      setStats({
        totalListings: 23,
        activeListings: 18,
        pendingApprovals: 2,
        totalViews: 1247
      });
      
      setProperties([
        { id: 1, title: "Luxury Apartment", status: "active", views: 245, price: "$500,000" },
        { id: 2, title: "Modern Villa", status: "active", views: 189, price: "$1,200,000" },
        { id: 3, title: "Beach House", status: "pending", views: 0, price: "$850,000" }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner text="Loading Retailer Dashboard..." />;
  }

  return (
    <div className="dashboard retailer-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {retailerData.companyName}</h1>
        <div className="retailer-rating">
          <i className="fas fa-star"></i>
          <span>{retailerData.rating} Rating</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-list"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.totalListings}</h3>
            <p>Total Listings</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.activeListings}</h3>
            <p>Active Listings</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.pendingApprovals}</h3>
            <p>Pending Approval</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-eye"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.totalViews}</h3>
            <p>Total Views</p>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <Link to="/retailer/add-property" className="btn-primary">
          <i className="fas fa-plus"></i>
          Add New Property
        </Link>
        <Link to="/retailer/properties" className="btn-secondary">
          <i className="fas fa-home"></i>
          Manage Properties
        </Link>
        <Link to="/retailer/analytics" className="btn-secondary">
          <i className="fas fa-chart-bar"></i>
          View Analytics
        </Link>
      </div>

      {/* Recent Properties */}
      <div className="recent-properties">
        <h2>Your Properties</h2>
        <div className="properties-table">
          <div className="table-header">
            <span>Property</span>
            <span>Status</span>
            <span>Views</span>
            <span>Price</span>
            <span>Actions</span>
          </div>
          {properties.map(property => (
            <div key={property.id} className="table-row">
              <span className="property-name">{property.title}</span>
              <span className={`status ${property.status}`}>
                {property.status}
              </span>
              <span>{property.views}</span>
              <span className="price">{property.price}</span>
              <div className="actions">
                <button className="action-btn edit">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="action-btn view">
                  <i className="fas fa-eye"></i>
                </button>
                <button className="action-btn delete">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="performance-metrics">
        <h2>Performance Metrics</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <h4>Response Rate</h4>
            <div className="metric-value">92%</div>
            <div className="metric-progress">
              <div className="progress-bar" style={{width: '92%'}}></div>
            </div>
          </div>
          <div className="metric-card">
            <h4>Listing Quality</h4>
            <div className="metric-value">88%</div>
            <div className="metric-progress">
              <div className="progress-bar" style={{width: '88%'}}></div>
            </div>
          </div>
          <div className="metric-card">
            <h4>Customer Satisfaction</h4>
            <div className="metric-value">95%</div>
            <div className="metric-progress">
              <div className="progress-bar" style={{width: '95%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerDashboard;