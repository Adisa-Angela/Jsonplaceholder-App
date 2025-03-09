import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "../styles/Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">📷 Json App</Link>
      </div>

      <div className="nav-links">
        <Link to="/users">Users</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/photos">Photos</Link>
      </div>

      <div className="nav-right">
        <Logout /> 
      </div>
    </nav>
  );
};

export default Navbar;
