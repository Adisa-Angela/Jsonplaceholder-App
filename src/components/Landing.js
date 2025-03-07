import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Landing.css"; 

const LandingPage = () => {
  const { user } = useAuth(); // Get authenticated user

  return (
    <div className="landing-container">
      <header className="hero">
        <h1>Welcome to JSONPlaceholder Auth App</h1>
        <p>Securely manage your authentication with Firebase.</p>
        
        {user ? (
          <Link to="/home" className="btn primary">Go to Home</Link>  
        ) : (
          <Link to="/login" className="btn primary">Login</Link>
        )}
      </header>

      <section className="features">
        <h2>Why Use This App?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🔐 Secure Authentication</h3>
            <p>Powered by Firebase Authentication for safe and reliable login.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Fast & Lightweight</h3>
            <p>Minimalistic UI with an intuitive user experience.</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Accessible Anywhere</h3>
            <p>Use the app from any device with internet access.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} JSONPlaceholder Auth App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
