import React from "react";
import "./style.css";

const BookCard = ({ title, author, rating, image, published, description, category, isRead, isFav }) => {
  return (
  <div className="book-card">
    <h2>{title}</h2>
    <p>Author: {author}</p>
    <p>Rating: {rating}</p>
    <img src={image} alt={title} width="25%" />
    <p>Published: {published}</p> 
    <p>Description: {description}</p>
    <p>Category: {category}</p>
    <p>Read: {isRead ? "Yes" : "No"}</p>
    <p>Favorite: {isFav ? "Yes" : "No"}</p>
  </div>
  );
};

export default BookCard;
