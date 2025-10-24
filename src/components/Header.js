import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <div>
              <div className="logo-text">SmartProperty</div>
              <div className="logo-subtext">Management System</div>
            </div>
          </Link>
          
          <nav className="nav-menu">
            <Link 
              to="/" 
              className={location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              Buy
            </Link>
            <Link to="/rent" className="nav-link">Rent</Link>
            <Link to="/new-launch" className="nav-link">New Launch</Link>
            <Link to="/commercial" className="nav-link">Commercial</Link>
            <Link to="/plots" className="nav-link">Plots/Land</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
          </nav>
          
          <div className="header-actions">
            <button className="post-property-btn">
              Post Property
            </button>
            <button className="login-btn">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Main Search Bar */}
      <div className="main-search-container">
        <div className="main-search">
          <div className="search-tabs">
            <button className="search-tab active">Buy</button>
            <button className="search-tab">Rent</button>
            <button className="search-tab">Commercial</button>
          </div>
          <div className="search-box">
            <div className="search-input-group">
              <select className="search-input">
                <option>All Residential</option>
                <option>Apartments</option>
                <option>Villas</option>
                <option>Plots</option>
                <option>Commercial</option>
              </select>
              <input 
                type="text" 
                className="search-input" 
                placeholder='Search "PG in sector 74 nodal"'
              />
              <button className="search-btn">Search</button>
            </div>
            <div className="recent-searches">
              <h4>Recent searches:</h4>
              <div className="search-tags">
                <span className="search-tag">Buy in Siwan</span>
                <span className="search-tag">Buy in Gaya</span>
                <span className="search-tag">Explore New City</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;