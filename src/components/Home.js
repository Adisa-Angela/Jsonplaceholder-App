import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logout from "./Logout";
import { motion } from "framer-motion";
import "../styles/Home.css";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null; // Prevent rendering if no user is logged in

  let firstName = "Guest";
//Extracting name logic
if (user.displayName) {
  firstName = user.displayName.split(" ")[0]; 
} else if (user.email) {
  let emailUsername = user.email.split("@")[0]; 
  
  let nameParts = emailUsername.split(/[^a-zA-Z]/).filter(Boolean); 
  
  firstName = nameParts[0] || "Guest"; 
  
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
}



  return (
    <div className={`home-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="top-section">
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
        <Logout />
      </div>

      <motion.h1
        className="welcome-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome, {firstName}!
      </motion.h1>
      <p className="welcome-text">Manage your users, albums, and photos with ease.</p>

      <motion.div
        className="card-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <Link to="/users" className="card-content">
            <h2>👤 Users</h2>
            <p>View and manage users in your system.</p>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <Link to="/albums" className="card-content">
            <h2>📸 Albums</h2>
            <p>Organize and view photo albums.</p>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <Link to="/photos" className="card-content">
            <h2>🖼 Photos</h2>
            <p>Browse and manage your photo collection.</p>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
