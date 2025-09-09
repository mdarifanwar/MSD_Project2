import React from "react";

const UserLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User Login successful (stub). Implement real logic here.");
  };

  return (
    <div className="form-container">
      <h2><i className="fas fa-user"></i> User Login</h2>
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

export default UserLogin;
