import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import "./style.css";

const App = () => {
  const initialBooksState = [{ id: 1, title: "Babel", author: "person", rating: 2, category: "Poetry" },
  { id: 2, category: "Poetry", title: "House of the Spirits", author: "person", rating: 2, category: "Poetry" },
  { id: 3, title: "100 Years of Solitude", author: "person", rating: 2, category: "Poetry" },
  { id: 4, title: "Pride and Prejudice", author: "person", rating: 2, category: "Poetry" },];

  const [books, setBooks] = useState(initialBooksState);

  const appendBook = (newBookTitle, newAuthor, newRating, newImage, newDate, newDescrip, newCat, newRead, newFav) => {
    const newBook = {
      id: books.length + 1,
      title: newBookTitle,
      author: newAuthor,
      rating: newRating,
      image: newImage,
      published: newDate,
      description: newDescrip,
      category: newCat,
      isRead: newRead,
      isFav: newFav
    };
    setBooks([...books, newBook]);
  };
  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook appendBook={appendBook} />
      <BookList books={books} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
