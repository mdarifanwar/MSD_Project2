import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Common/LoadingSpinner";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats({
        totalUsers: 1245,
        totalProperties: 567,
        totalRetailers: 89,
        pendingApprovals: 23
      });
      
      setRecentActivities([
        { id: 1, type: 'user', action: 'New user registered', time: '2 minutes ago' },
        { id: 2, type: 'property', action: 'New property listed', time: '5 minutes ago' },
        { id: 3, type: 'retailer', action: 'Retailer account approved', time: '10 minutes ago' },
        { id: 4, type: 'property', action: 'Property verification completed', time: '15 minutes ago' }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner text="Loading Admin Dashboard..." />;
  }

  return (
    <div className="dashboard admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Manage users, properties, and system settings</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.totalUsers}</h3>
            <p>Total Users</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-building"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.totalProperties}</h3>
            <p>Total Properties</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-store"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.totalRetailers}</h3>
            <p>Total Retailers</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-info">
            <h3>{stats.pendingApprovals}</h3>
            <p>Pending Approvals</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <Link to="/admin/users" className="action-btn">
            <i className="fas fa-user-cog"></i>
            Manage Users
          </Link>
          <Link to="/admin/properties" className="action-btn">
            <i className="fas fa-home"></i>
            Manage Properties
          </Link>
          <Link to="/admin/retailers" className="action-btn">
            <i className="fas fa-store"></i>
            Manage Retailers
          </Link>
          <Link to="/admin/approvals" className="action-btn">
            <i className="fas fa-check-circle"></i>
            Pending Approvals
          </Link>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <div className="activities-list">
          {recentActivities.map(activity => (
            <div key={activity.id} className="activity-item">
              <div className="activity-icon">
                <i className={`fas fa-${activity.type === 'user' ? 'user' : activity.type === 'property' ? 'home' : 'store'}`}></i>
              </div>
              <div className="activity-details">
                <p>{activity.action}</p>
                <span>{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;