import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div>
      <BookCard books={books} />
    </div>
  );
};

export default BookList;