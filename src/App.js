import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";  
import Landing from "./components/Landing";
import Login from "./components/Login";
import Home from "./components/Home";
import Users from "./components/Users";
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import Signup from "./components/Signup";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Private Routes with Navbar */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />  
                <Routes>
                  <Route path="/home" element={<PrivateRoute element={<Home />} />} />
                  <Route path="/users" element={<PrivateRoute element={<Users />} />} />
                  <Route path="/albums" element={<PrivateRoute element={<Albums />} />} />
                  <Route path="/photos" element={<PrivateRoute element={<Photos />} />} />
                  {/* Redirect unknown paths to home */}
                  <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
