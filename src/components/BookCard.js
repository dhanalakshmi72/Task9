import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ book }) => {
  const { author, title, price, image } = book;

  return (
    <div className="book-card">
      <img className="card-image" src={image} alt={`${title} Cover`} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{author}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default BookCard;


