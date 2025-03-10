import React, { useEffect, useState } from "react";
import Search from "../components/Search"; 
import "../styles/Albums.css";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch albums");
        }
        return response.json();
      })
      .then((data) => {
        setAlbums(data);
        setFilteredAlbums(data); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = albums.filter((album) =>
      album.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAlbums(filtered);
  };

  return (
    <div className="albums-container">
      <h1 className="albums-title">Albums List</h1>

      <Search onSearch={handleSearch} placeholder="Search albums..." /> 

      {loading && <p className="loading">Loading albums...</p>}
      {error && <p className="error">{error}</p>}

      <div className="albums-grid">
        {filteredAlbums.map((album) => (
          <div key={album.id} className="album-card">
            <h3>{album.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
