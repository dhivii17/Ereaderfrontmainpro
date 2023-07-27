import React, { useState,useEffect} from 'react';
import './Secretly.css';
import img1 from './assets/Secretly-Yours.pdf';
import {Link} from 'react-router-dom';

function Secretly() {
  const [isThumbsDown, setIsThumbsDown] = useState(false);
  const [rating, setRating] = useState(3); // Initial rating set to 3

  const [books, setBooks] = useState([]);
  const [id, setId] = useState([]);
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);

 
  useEffect(() => {
    fetch('http://localhost:8181/api/showDetails',id,title,image)
      .then(response => response.json())
      .then(data => {
        setBooks(data);
       
        const bookId = data.map(book => book.id);
        setId(bookId);
        const bookTitle = data.map(book => book.title);
        setTitle(bookTitle);
        const bookImage = data.map(book => book.image); // Assuming you have 'authors' field in the book data
        setImage(bookImage);
      })
      .catch(error => console.error(error));
  }, []);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleClick = () => {
    setIsThumbsDown(!isThumbsDown);
  };

  return (
    <div className="secretly-container">
      <h2 className="secretly-heading">Secretly Yours</h2>

      <div className="responsive secretly-gallery">
        <img
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658329740i/61102610.jpg"
          alt="Secretly"
          className="secretly-image"
        />

        <div className="secretly-description">
          <table className="secretly-table">
            <tbody>
              <tr>
                <th>Genre:</th>
                <td>
                  <a href="Romance">Romance</a>,<a href="/Humor">Humor</a>
                </td>
              </tr>
              <tr>
                <th>Author:</th>
                <td>Tessa Bailey</td>
              </tr>
              <tr>
                <th>Chapters:</th>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="secretly-btns">
        <a href={img1} target="_blank" className="secretly-read-now">
          Read now
        </a><Link to='./Wishlist'>
        <button type="submit" className="secretly-wishlist">
          Wishlist
        </button></Link>
      </div>

      <div className="secretly-descrip">
        <h3>Description:</h3>
        <p>
          Secretly Yours was such a good time. Hallie is a gardener and Julian is a professor who is back in town at his
          family's vineyard to write a book. Hallie has had a crush on Julian since high school but hasn't seen him in
          some time. As these two become friends, some secret admire letters come into play.
        </p>

        <h3>Rating:</h3>
        <div className='secretly-rating'>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`fa ${star <= rating ? 'fa-star checked' : 'fa-star'}`}
              onClick={() => handleRatingClick(star)}
            />
          ))}
        </div>
      </div>

        <div className="secretly-like">
          <i className={`fa ${isThumbsDown ? 'fa-thumbs-down' : 'fa-thumbs-up'}`} onClick={handleClick}></i>
        </div>
      </div>
    
  );
}

export default Secretly;
