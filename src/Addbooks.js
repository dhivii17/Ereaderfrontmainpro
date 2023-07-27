import React, { useState, useEffect } from 'react';
import './Addbooks.css';
import axios from 'axios';



const Add = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genres, setGenres] = useState('');
  const [chapter, setChapter] = useState('');
  const [image, setImage] = useState('');
  const [page, setPage] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch existing books from the backend when the component mounts
    fetchExistingBooks();
  }, []);

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleGenresChange = (event) => {
    setGenres(event.target.value);
  };

  const handleChapterChange = (event) => {
    setChapter(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const fetchExistingBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8181/api/addDetails');
      // Do something with the response, if needed
    } catch (error) {
      console.error('Error fetching existing books:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      id,
      title,
      author,
      genres,
      chapter,
      image,
      page,
      rating,
      description,
    };

    // Check if the book with the same title and author already exists
    try {
      const response = await axios.get('http://127.0.0.1:8181/api/showDetails', data);
      const existingBooks = response.data;
      const isDuplicate = existingBooks.some(
        (book) => book.title === title && book.author === author
      );

      if (isDuplicate) {
        setErrorMessage('This book already exists. Cannot add again.');
      } else {
        await axios.post('http://127.0.0.1:8181/api/addDetails', data);
        // Perform your API call to add the book to the backend here
        // For example: axios.post('/api/books', data);

        // Clear the form and error message after successful submission
        setId('');
        setTitle('');
        setAuthor('');
        setGenres('');
        setChapter('');
        setImage('');
        setPage('');
        setRating('');
        setDescription('');
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error fetching existing books:', error);
    }
  };

  return (
    <div>

      <div className="App1">
        <header className="App-header1">
          <form className="form1" onSubmit={handleSubmit}>
            <h2 className="add-head"> ADD NEW BOOKS </h2>
            <label className="label-cls">Id:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={id}
              required
              onChange={handleIdChange}
            />
            <br />

            <label className="label-cls">Title:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={title}
              required
              onChange={handleTitleChange}
            />
            <br />

            <label className="label-cls">Author:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={author}
              required
              onChange={handleAuthorChange}
            />
            <br />

            <label className="label-cls">Genres:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={genres}
              required
              onChange={handleGenresChange}
            />
            <br />

            <label className="label-cls">Chapter:</label>
            <br />
            <input
              className="ip-cls"
              type="number"
              value={chapter}
              required
              onChange={handleChapterChange}
            />
            <br />

            <label className="label-cls">Image:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={image}
              required
              onChange={handleImageChange}
            />
            <br />

            <label className="label-cls">Page:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={page}
              required
              onChange={handlePageChange}
            />
            <br />

            <label className="label-cls">Rating:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={rating}
              required
              onChange={handleRatingChange}
            />
            <br />

            <label className="label-cls">Description:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={description}
              required
              onChange={handleDescriptionChange}
            />
            <br />
            <br />
            <button className="add-btn" type="submit">
              Submit
            </button>
          </form>
          {errorMessage && <p>{errorMessage}</p>}
        </header>
      </div>
    </div>
  );
};

export default Add;