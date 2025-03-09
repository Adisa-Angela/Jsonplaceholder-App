import React, { useEffect, useState } from "react";
import "../styles/Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-container">
      <h1>Users List</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      <div className="user-grid">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
