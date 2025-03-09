import React, { useEffect, useState } from "react";
import "../styles/Photos.css"; 

const Photos = () => {
  const [photos, setPhotos] = useState([]);
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
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="photos-container">
      <h1 className="photos-title">Photo Gallery</h1>

      {loading && <p className="loading">Loading photos...</p>}
      {error && <p className="error">{error}</p>}

      <div className="photos-grid">
        {photos.length > 0 ? (
          photos.map((photo) => (
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
