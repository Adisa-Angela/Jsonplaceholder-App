import React, { useEffect, useState } from "react";
import Search from "../components/Search"; 
import "../styles/Photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=12")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched photos:", data);
        setPhotos(data);
        setFilteredPhotos(data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = photos.filter((photo) =>
      photo.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPhotos(filtered);
  };

  return (
    <div className="photos-container">
      <h1 className="photos-title">Photo Gallery</h1>

      <Search onSearch={handleSearch} placeholder="Search photos..." />

      {loading && <p className="loading">Loading photos...</p>}
      {error && <p className="error">{error}</p>}

      <div className="photos-grid">
        {filteredPhotos.length > 0 ? (
          filteredPhotos.map((photo) => (
            <div key={photo.id} className="photo-card">
              <a href={photo.url} target="_blank" rel="noopener noreferrer">
                <img src={`https://picsum.photos/150?random=${photo.id}`} alt={photo.title} />
              </a>
              <p className="photo-title">{photo.title}</p>
            </div>
          ))
        ) : (
          <p className="error">No photos available.</p>
        )}
      </div>
    </div>
  );
};

export default Photos;
