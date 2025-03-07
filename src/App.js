import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import Landing from "./components/Landing";
import Login from "./components/Login";
import Home from "./components/Home";
import Users from "./components/Users";
import Albums from "./components/Albums";
import Photos from "./components/Photos";

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        {/* Redirect to home if no match is found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
