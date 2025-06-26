import React from "react";
import BookCard
 from "./BookCard";
const BookList = ({books}) => {

  return (
    <>
      {/*{books.map((book) => (
    <li key={book.id}>{book.title} by {book.author} {book.rating} stars,
     URL: {book.image}, Pub: {book.published}, Decrip: {book.description}, 
     Cat: {book.category}, Read: {book.isRead}</li>
  ))}
  */}

  {/*<table>
  <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Description</th>
          <th>Published</th>
          <th>Rating</th>
        </tr>
      </thead>
    {books.map((book) => (
    <tr>
      <td key={book.id}>{book.title}</td>
      <td key={book.id}>{book.author}</td>
      <td key={book.id}>{book.category}</td>
      <td key={book.id}>{book.description}</td>
      <td key={book.id}>{book.published}</td>
      <td key={book.id}>{book.rating}</td>
      <td key={book.id}>{book.isRead}</td>
      <td key={book.id}>{book.isFav}</td>
      </tr>
    ))}
  </table> */}
   <BookCard books={books}/>
  </>
  );
};

export default BookList;
