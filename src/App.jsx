import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import BookCard from "./components/BookCard";
import "./style.css";

const App = () => {
  const initialBooksState = [
    {
      id: 1,
      title: "Siddartha",
      author: "Herman Hesse",
      rating: "★★★★☆",
      category: "Fiction",
      image: "https://images.penguinrandomhouse.com/cover/9780142437186",
      description:
        "Set in ancient India, the novel follows Siddhartha, a young Brahmin, who renounces conventional life and undergoes a series of profound experiences—from asceticism and sensual pleasure to worldly success and eventual stillness by the river."
    },
    {
      id: 2,
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      rating: "★★★★☆",
      category: "Fiction",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtn5aof5WIwFN6Eofs8sFbPqqvNS7KvmEN_Q&s",
      description:
        "Things Fall Apart follows the story of Okonkwo, a revered member of a native tribe, as his life is torn apart by the negative effects of colonialism, leaving him eventually dead by suicide."
    },
    {
      id: 3,
      title: "Augustown",
      author: "Kei Miller",
      rating: "★★★★★",
      category: "Fiction",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1478980712i/28447227.jpg",
      description:
        "Augustown is a magical and haunting novel set in the underbelly of Jamaica. Ma Taffy may be blind but she sees everything."
    },
    {
      id: 4,
      title: "The Republic",
      author: "Plato",
      rating: "★★★☆☆",
      category: "Philosophy",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvrK05haZ9PG1KkTFi4Bsvxef1lkCklMcOw&s",
      description:
        "The Republic by Plato is a text that describes the importance of being just in the world, and by being just, one is happy. It describes an ideal city and a way through which a just and philosophical governance can create happiness."
    }
  ];
  
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
      <h1 className="title">Book Reviews 📝</h1>
      <AddBook appendBook={appendBook} />
      <BookList books={books} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
