import React from "react";
import BookCard from "./BookCard";
import "./style.css";

const BookList = ({books}) => {

  return ( 
  <div className="book-list">
    {books.map((book) => (
      <BookCard
        key={book.id}
        title={book.title}
        author={book.author}
        rating={book.rating}
        image={book.image}
        published={book.published}
        description={book.description}
        category={book.category}
        isRead={book.isRead}
        isFav={book.isFav}
      />
    ))}
  </div>
  );
};

export default BookList;