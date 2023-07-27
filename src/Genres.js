import React from 'react';
import {Link} from 'react-router-dom';
import './Genres.css';
import './Home.css'
const Genres = () => {
  return (
    <div>
        <header>
        <nav>
          <div className="itemss">
          <div className="logo">
            <img src="https://lh5.googleusercontent.com/p/AF1QipPbUAbV0Tw-s2xM-JyblT1s5_Ns7CtEAsDJ_oBZ=w750-h813-p-k-no" alt="Logo" />
          </div>
            <a href="#" >Home</a>
            <a href="#">Books</a>
            <a><Link to="/Genres">Genres</Link></a>
            <a><Link to="/dashboard">Status</Link></a>
            <a href="#">Login</a>
          <div className="other">
            <Link to="/">
            <button1>Logout</button1>
            </Link>
          </div>
          </div>
        </nav>
      </header>
      <h2>Genres</h2>

      <div className="tttt">
        <div className="genre">Action</div>
        <div className="genre">Adventure</div>
        <div className="genre">Comedy</div>
        <div className="genre">Drama</div>
        <div className="genre">Fantasy</div>
        <div className="genre">Horror</div>
        <div className="genre">Mystery</div>
        <div className="genre">Romance</div>
        <div className="genre">Sci-Fi</div>
        <div className="genre">Thriller</div>
      </div>
    </div>
  );
};

export default Genres;
