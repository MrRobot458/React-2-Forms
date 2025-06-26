import React, { useState } from "react";
import "./style.css";

/**
 * A book should have the following fields:
 * + title (required) 
 * + author (required)
 * + image (optional, url)
 * + publishedDate (optional, datetime)
 * + description (optional, text)
 * FIX - rating (number, 1-5)
 * + category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * + isRead (boolean, default false)
 * + isFavorite (boolean, default false)
 */

const AddBook = ({ appendBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("0");
  const [image, setImage] = useState("");
  const [published, setPublished] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isRead, setIsRead] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [titleErrors, setTitleErrors] = useState([]);
  const [dirty, setDirty] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("title", title);
    appendBook(title,author,rating,image,published,description,category,isRead,isFav);
    clearForm();
  };

  const handleTitleChange = (event) => {
    setDirty(true);
    setTitle(event.target.value);
    // Let's make sure the title has at least 4 characters in it
    if (title.length < 4) {
      setTitleErrors(["title must have at least 4 characters"]);
    } else {
      setTitleErrors([]);
    }
  };

  const handleAuthorChange = (event) => {
    setDirty(true);
    setAuthor(event.target.value);
  }

  const handleRatingChange = (event) => {
    setDirty(true);
    let stars = "☆☆☆☆☆";
    let starArray = stars.split("");
    for (let i = 0; i < parseInt(event.target.value); i++){
      starArray[i] = "★";
    }
    setRating(starArray.join(""));
  }

  const handleImageChange = (e) => {
    setDirty(true);
    setImage(e.target.value);
  }

  const handleDateChange = (e) => {
    setDirty(true);
    setPublished(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDirty(true);
    setDescription(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setDirty(true);
    setCategory(e.target.value);
  }

  const handleReadChange = (e) => {
    setDirty(true);
    setIsRead(e.target.checked);
  }

  const handleFavChange = (e) => {
    setDirty(true);
    setIsFav(e.target.checked);
  }

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setRating("0");
    setImage("");
    setPublished("");
    setDescription("");
    setCategory("");
    setIsRead(false);
    setIsFav(false);
  };

  return (
    <form onSubmit={handleSubmit} className="new-book-form">
      <input
        name="title"
        type="text"
        required
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        name="author"
        type="text"
        required
        placeholder="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <input
        name="image"
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={handleImageChange}
      />
      <input
        name="published"
        type="date"
        value={published}
        onChange={handleDateChange}
      />
      <input
        name="description"
        type="text"
        value={description}
        placeholder="Description..."
        onChange={handleDescriptionChange}
      />
      <select
        name = "rating"
        onChange={handleRatingChange}
      >
          <option value="0">Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
      </select>
      <select name="category" onChange={handleCategoryChange}>
        <option value="">Select Genre</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-fiction">Non-fiction</option>
        <option value="Poetry">Poetry</option>
        <option value="Drama">Drama</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Science">Science</option>
      </select>

      <label>
      Have you read this before?
      <input type="checkbox" name="isRead" checked={isRead} onChange={handleReadChange}/>
      </label>
      <label>
      Is this your favorite?
      <input type="checkbox" name="isFav" checked={isFav} onChange={handleFavChange}/>
      </label>

      {titleErrors.map((error) => (
        <p className="error" key={error}>
          {error}
        </p>
      ))}
      <button disabled={titleErrors.length > 0 || !dirty}>Add Book</button>
    </form>
  );
};

export default AddBook;