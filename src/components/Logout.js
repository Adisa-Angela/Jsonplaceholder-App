import React from "react";

const Logout = ({ handleLogout }) => {
  return (
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
