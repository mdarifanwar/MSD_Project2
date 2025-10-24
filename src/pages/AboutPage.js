import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About Smart Property Management</h1>
          <p className="hero-subtitle">
            Revolutionizing the way people find, buy, and manage properties
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Smart Property Management, we're dedicated to making property 
              transactions seamless, transparent, and accessible for everyone. 
              Whether you're buying your first home, investing in real estate, 
              or managing multiple properties, we provide the tools and platform 
              to make your journey successful.
            </p>
          </div>
          <div className="mission-stats">
            <div className="mission-stat">
              <h3>10,000+</h3>
              <p>Properties Listed</p>
            </div>
            <div className="mission-stat">
              <h3>5,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="mission-stat">
              <h3>50+</h3>
              <p>Cities Covered</p>
            </div>
            <div className="mission-stat">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <i className="fas fa-user"></i>
              </div>
              <h3>John Smith</h3>
              <p className="member-role">CEO & Founder</p>
              <p className="member-bio">
                With over 15 years in real estate technology, John leads our 
                vision to transform property management.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">
                <i className="fas fa-user"></i>
              </div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">CTO</p>
              <p className="member-bio">
                Sarah oversees our technology stack and ensures our platform 
                remains cutting-edge and reliable.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">
                <i className="fas fa-user"></i>
              </div>
              <h3>Mike Chen</h3>
              <p className="member-role">Head of Operations</p>
              <p className="member-bio">
                Mike manages our day-to-day operations and ensures smooth 
                experiences for all our users.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Trust & Security</h3>
              <p>
                We prioritize the security of your data and transactions, 
                ensuring a safe environment for all property dealings.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously evolve our platform with the latest 
                technology to provide the best user experience.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>
                We believe in building strong relationships between 
                buyers, sellers, and property professionals.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3>Customer First</h3>
              <p>
                Every decision we make is driven by what's best for 
                our customers and their property journey.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied users in their property journey</p>
          <div className="cta-buttons">
            <button className="btn-primary">Sign Up Now</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;