
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/MainContent.css';


function MainContent() {
  const images = [
    'https://static.vecteezy.com/system/resources/previews/015/370/459/original/luxury-old-library-interior-at-night-empty-room-free-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/015/369/776/non_2x/old-luxury-library-interior-with-bookcases-free-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/013/531/100/non_2x/luxury-old-living-room-or-library-interior-books-free-vector.jpg'
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftArrow = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleRightArrow = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handleLeftArrow();
      } else if (e.key === 'ArrowRight') {
        handleRightArrow();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, [currentImageIndex]);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
      }}
    >
      <button className="arrow-button left" onClick={handleLeftArrow}>
       
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button className="arrow-button right" onClick={handleRightArrow}>
       
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <div className="content">
        <h1>Open a book, Open Your Mind!</h1>
        <p>Subscribe for more, Enjoy Reading</p>
        <button className="subscribe-button">
          Subscribe <i className="fas fa-envelope"></i>
        </button>
      </div>
    </div>
  );
}

export default MainContent;
