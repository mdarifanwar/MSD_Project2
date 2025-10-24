import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./Common/LoadingSpinner"; // Fixed import path

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Admin Login successful!");
      navigate("/admin/dashboard");
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return <LoadingSpinner text="Logging in..." />;
  }

  return (
    <div className="form-container">
      <h2><i className="fas fa-user-shield"></i> Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password}
            onChange={handleInputChange}
            required 
          />
        </div>
        <button type="submit" className="form-btn">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;