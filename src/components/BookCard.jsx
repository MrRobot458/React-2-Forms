import React from "react";

const BookCard = ({ books }) => {
  return (
    <div>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-card">
            <img src={book.image} alt={`Cover of ${book.title}`} />
            <h3>{book.title}</h3>
            <p>By {book.author}</p>
            <p>Rating: {book.rating}</p>
            <p>Genre: {book.category}</p>
            <p>Description: {book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCard;