import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PropertiesPage from "./pages/PropertiesPage";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import UserSignUp from "./components/UserSignUp";
import RetailerLogin from "./components/RetailerLogin";
import RetailerSignUp from "./components/RetailerSignUp";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import UserDashboard from "./components/Dashboard/UserDashboard";
import RetailerDashboard from "./components/Dashboard/RetailerDashboard";
import AddProperty from "./components/Property/AddProperty";
import PropertyDetails from "./components/Property/PropertyDetails";
import "./App.css";

const App = () => {
  return (
    <Router basename="/MSD_Project2">
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            
            {/* Authentication Routes */}
            <Route path="/admin_login" element={<AdminLogin />} />
            <Route path="/user_login" element={<UserLogin />} />
            <Route path="/user_signup" element={<UserSignUp />} />
            <Route path="/retailer_login" element={<RetailerLogin />} />
            <Route path="/retailer_signup" element={<RetailerSignUp />} />
            
            {/* Dashboard Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/retailer/dashboard" element={<RetailerDashboard />} />
            
            {/* Property Management Routes */}
            <Route path="/retailer/add-property" element={<AddProperty />} />
            <Route path="/retailer/edit-property/:id" element={<AddProperty />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;