import React from 'react';
import '../styles/CustomerReviews.css';
import reviewsData from './reviewsData';
import  { useState } from 'react';

const CustomerReviews = () => {
    const [selectedRating, setSelectedRating] = useState(0);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };
  return (
    <div className='customer-background'>
    <div className="customer-reviews-container">
      <h2>Customer Reviews</h2>
     
      <div className="review-cards-container">
        {reviewsData.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <img src={review.imageUrl} alt={`Customer ${index + 1}`} className="customer-image" />
              <h3>{review.name}</h3>
            </div>
            <div className="rating ">
              {Array(review.rating).fill().map((_, starIndex) => (
                <span key={starIndex} className="star-icon">★</span>
              ))}
            </div>
            <p className="feedback">{review.feedback}</p>
          </div>
        ))}
      </div>
       <div className="rate-us-container">
        <p>Rate Us</p>
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            className={`star-icon2 ${rating <= selectedRating ? 'filled' : ''}`}
            onClick={() => handleStarClick(rating)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CustomerReviews;

