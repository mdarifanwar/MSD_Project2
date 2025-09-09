// Home.jsx
import React from "react";
import LoginCard from "./LoginCard";

const Home = () => (
  <div className="container">
    <LoginCard icon="fas fa-user-shield" title="Admin" />
    <LoginCard icon="fas fa-user" title="User" isRetailer={true} />
    <LoginCard icon="fas fa-store" title="Retailer" isRetailer={true} />
  </div>
);

export default Home;
