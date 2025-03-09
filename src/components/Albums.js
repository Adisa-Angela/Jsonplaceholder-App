import React, { useEffect, useState } from "react";
import "../styles/Albums.css"; 

const Albums = () => {
  const [albums, setAlbums] = useState([]);
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
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="albums-container">
      <h1 className="albums-title">Albums List</h1>
      
      {loading && <p className="loading">Loading albums...</p>}
      {error && <p className="error">{error}</p>}

      <div className="albums-grid">
        {albums.map((album) => (
          <div key={album.id} className="album-card">
            <h3>{album.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
