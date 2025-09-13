import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import UserSignUp from "./components/UserSignUp";
import RetailerLogin from "./components/RetailerLogin";
import RetailerSignUp from "./components/RetailerSignUp";

const App = () => {
  return (
    <Router basename="/MSD_Project2">
      <Header />
      <Routes>
        {/* Home page with cards */}
        <Route
          path="/"
          element={
            <div className="container">
              <Card icon="fas fa-user-shield" title="Admin" loginPath="/admin_login" />
              <Card icon="fas fa-user" title="User" loginPath="/user_login" signupPath="/user_signup" />
              <Card icon="fas fa-store" title="Retailer" loginPath="/retailer_login" signupPath="/retailer_signup" />
            </div>
          }
        />

        {/* Admin */}
        <Route path="/admin_login" element={<AdminLogin />} />

        {/* User */}
        <Route path="/user_login" element={<UserLogin />} />
        <Route path="/user_signup" element={<UserSignUp />} />

        {/* Retailer */}
        <Route path="/retailer_login" element={<RetailerLogin />} />
        <Route path="/retailer_signup" element={<RetailerSignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
