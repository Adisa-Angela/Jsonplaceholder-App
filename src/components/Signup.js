import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import "../styles/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook for redirection

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! Redirecting to login...");
      navigate("/login"); // Redirect to Login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="signup-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
