import React, { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <h1>Photos</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ margin: "10px" }}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
