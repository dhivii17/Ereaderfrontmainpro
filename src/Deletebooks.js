import React, { useState } from "react";
import axios from "axios";
import './Deletebooks.css'

const Deletebooks = () => {
  const [bookId, setBookId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleBookIdChange = (event) => {
    setBookId(event.target.value);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.delete(`http://localhost:8181/api/deleteDetails/${bookId}`);
      if (response.status === 200) {
        setSuccessMessage("Book deleted successfully.");
        setBookId(""); // Clear the input field after successful deletion
      } else {
        setErrorMessage("Failed to delete book. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Error deleting book. Please try again.");
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="delete-books-container">
      <h1>Delete Book by ID</h1>
      <form onSubmit={handleDelete}>
        <label>Book ID:</label>
        <input
          type="text"
          value={bookId}
          onChange={handleBookIdChange}
          required
        />
        <button type="submit">Delete</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Deletebooks;
