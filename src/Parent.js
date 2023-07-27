import React from 'react';
import Book from './Bookmark';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>My Book Collection</h1>
      <Book
        title="Book 1"
        author="Author 1"
        imageUrl="/path/to/book1.jpg"
      />
      <Book
        title="Book 2"
        author="Author 2"
        imageUrl="/path/to/book2.jpg"
      />
      <Book
        title="Book 3"
        author="Author 3"
        imageUrl="/path/to/book3.jpg"
      />
    </div>
  );
};

export default App;
