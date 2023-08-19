import React from 'react';
import '../styles/Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="home">
      <div className="image-container">
        <img
          src="https://wallpaperaccess.com/full/3141754.jpg"
          alt="Meditation"
          className="bg-image"
        />
        <div className="card">
          <h2>Welcome to our Meditation App</h2>
          <p>Discover inner peace and tranquility through guided meditation.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
