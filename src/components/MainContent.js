import React from 'react';
import '../styles/MainContent.css';
function MainContent() {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Open a book,Open Your Mind!</h1>
        <p>Subscribe for more,Enjoy Reading</p>
        <button className="subscribe-button">
          Subscribe <i className="fas fa-envelope"></i>
        </button>
      </div>
    </div>
  );
}
export default MainContent;

