import React from "react";
import { Link } from "react-router-dom";

const Card = ({ icon, title, description, loginPath, signupPath }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      {description && <p className="card-description">{description}</p>}
      <div className="card-actions">
        <Link to={loginPath}>
          <button className="btn-primary">
            <i className="fas fa-sign-in-alt"></i>
            Login
          </button>
        </Link>
        {signupPath && (
          <Link to={signupPath}>
            <button className="btn-secondary">
              <i className="fas fa-user-plus"></i>
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;