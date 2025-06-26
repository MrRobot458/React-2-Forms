import React from "react";

const BookCard = ({books}) => {
  return (
  <>
    <ul>
      {books.map((book) => (
      <li key={book.id}>
        <img src={book.image} alt={`Cover of ${book.title}`} />
        <h3>{book.title}</h3>
        <p>By {book.author}</p>
        <p>Rating: {book.rating}</p>
        <p>Category: {book.category}</p>
        <p>Description: {book.description}</p>
      </li>
    ))}
    </ul>
    
  </>
  );
};

export default BookCard;
