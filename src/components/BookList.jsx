import React from "react";
import BookCard
 from "./BookCard";
const BookList = ({books}) => {

  return ( 
  <>
   <BookCard books={books}/>
  </>
  );
};

export default BookList;
