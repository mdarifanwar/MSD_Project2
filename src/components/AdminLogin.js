import React from "react";

const AdminLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin Login successful (stub). Implement real logic here.");
  };

  return (
    <div className="form-container">
      <h2><i className="fas fa-user-shield"></i> Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
