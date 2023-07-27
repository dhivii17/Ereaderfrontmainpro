// import React, { useState } from 'react';
// import './Books.css';

// const booksData = [
//     {
//       "id": 1,
//       "title": 'Gardens of the Moon',
//       "author": 'Steven Erikson',
//       "genre": 'Fantasy',
//       "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/71zaKxkblSL._AC_UL600_SR600,600_.jpg",
//       "year": 1999,
//     },
//     {
//       "id": 2,
//       "title": 'The Last Watch',
//       "author": 'J. S. Dewes',
//       "genre": 'Science and Fiction',
//       "imageUrl": "https://m.media-amazon.com/images/I/51M19wnWG5L.jpg",
//       "year": 2019,
//     },
//     {
//       "id": 3,
//      "title": 'Love Unscripted',
//       "author": 'Owen Nicholls',
//       "genre": 'Romance',
//       "imageUrl" : "https://m.media-amazon.com/images/I/81CVT7bHcEL._AC_UF1000,1000_QL80_.jpg",
//       "year": 2019,
//     },
//     {
//       "id": 4,
//       "title": 'Dragon Throne',
//       "author": 'Amma Lee',
//       "genre": 'Adventure',
//       "imageUrl": "https://i.pinimg.com/1200x/f4/07/4f/f4074f3f58446b078e3db46077564575.jpg",
//       year: 2018,
//     },
//     {
      
//       "id": 5,
//       "title": 'Shadow and bone',
//       "author": 'Leigh Bardugo',
//       "genre": 'Fantasy',
//       "imageUrl": "https://cdn.kobo.com/book-images/ce16d1be-66a4-4130-bf3f-17a189116685/1200/1200/False/the-shadow-and-bone-trilogy.jpg",
//       year: 2012,
//     },
//     {
//       "id": 6,
//       "title": 'Night of Terror',
//       "author": 'Jean Marie Rusin',
//       "genre": 'Horror',
//       "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzGF2h6dxBGuYGq9yL7kEla6wbNCKfWqSQg&usqp=CAU",
//       year: 2017,
//     },
//     {
//       "id": 7,
//       "title": 'Dont Turn Around',
//       "author": 'Jessica Barry ',
//       "genre": 'Thriller',
//       "imageUrl": "https://img.etimg.com/photo/msid-98033724/dont-turn-around-by-jessica-barry.jpg",
//       year: 2020,
//     },
//     {
      
//       "id": 8,
//       "title": 'The Bad Guys',
//       "author": 'Aaron blabey',
//       "genre": 'Comedy',
//       "imageUrl": "https://childhood101.com/wp-content/uploads/2017/07/The-Bad-Guys.jpg",
//       year: 2022,
//     },
//   {
//       "id": 9,
//       "title": 'The Cold Storm',
//       "author": 'John Etterlee',
//       "genre": 'Action-THriller',
//       "imageUrl": "https://m.media-amazon.com/images/I/51d7yB5cETL.jpg",
//       year: 2019,
  
//   },
//   {
//     "id": 10,
//       "title": 'Death on the River',
//       "author": 'Clare chase',
//       "genre": 'Mystery',
//       "imageUrl": "https://m.media-amazon.com/images/I/51lmjHXbUbL.jpg",
//       year: 2018,
//   }
  
// ];

// const Books = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredBooks, setFilteredBooks] = useState(booksData);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     // Filter books based on the search query
//     const filtered = booksData.filter(
//       (book) =>
//         book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         book.genre.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredBooks(filtered);
//   };

//   const handleAddToWishlist = (id) => {
//     // Handle the "Wishlist" button click here
//     // You can add the book with the given ID to the user's wishlist
//     console.log(`Added book with ID ${id} to wishlist`);
//   };

//   return (
//     <div className="books-page">
//       <div className="search-container">
//         <form onSubmit={handleSearchSubmit} className="search-form">
//           <input
//             type="text"
//             placeholder="Search for books..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           <button type="submit">Search</button>
//         </form>
//       </div>
//       <div className="books-container">
//         {filteredBooks.map((book) => (
//           <div className="book-card" key={book.id}>
//             <img src={book.imageUrl} alt={book.title} className="book-image" />
//             <div className="book-details">
//               <h2 className="book-title">{book.title}</h2>
//               <p className="book-info">
//                 <span className="book-info-label">Author:</span> {book.author}
//               </p>
//               <p className="book-info">
//                 <span className="book-info-label">Genre:</span> {book.genre}
//               </p>
//               <p className="book-info">
//                 <span className="book-info-label">Year:</span> {book.year}
//               </p>
//               <button onClick={() => handleAddToWishlist(book.id)}>
//                 Add to Wishlist
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Books;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Books.css'; // Import the CSS file for this component

const Library = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8181/api/showDetails'); // Replace with the actual endpoint for fetching all books
      setBooks(response.data);
    } catch (error) {
      console.error('Error occurred while fetching books:', error);
      // Handle error, show an error message or something
    }
  };

  // Filter books based on search term
  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const addToWishlist = async (book) => {
    try {
      await axios.post('http://127.0.0.1:8181/api/addtoWishlist', book);
      console.log(`Added book with ID ${book.id} to wishlist.`);
    } catch (error) {
      console.error('Error occurred while adding to wishlist:', error);
    }
  };

  return (
    <div className="library-container">
      <h2 className="library-heading">Library</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="book-gallery">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-container">
            <Link to={`/bookdetails/${book.id}`} className="book-link">
              <img src={book.image} alt={`Cover of ${book.title}`} className="book-cover" />
            </Link>
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-info">Author: {book.author}</p>
              <button onClick={() => addToWishlist(book)} className="wishlist-button">
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
