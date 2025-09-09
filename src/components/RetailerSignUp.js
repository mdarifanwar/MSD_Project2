import React from "react";

const RetailerSignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Retailer Sign Up successful (stub). Implement real logic here.");
  };

  return (
    <div className="form-container">
      <h2><i className="fas fa-store"></i> Retailer Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Full Name" required />
        </div>
        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RetailerSignUp;
