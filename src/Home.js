import React from 'react';
import './Home.css';
import img1 from './assets/Terms&Cond.pdf';
import img2 from './assets/Privacy&Policy.pdf';
import img3 from './assets/FAQ.pdf';
import img4 from './assets/Contact.pdf';
import { Link } from 'react-router-dom';
import Feedback from './Feedback.js'

const Home = () => {
  return (
    <>
      <div>
        <header>
          <nav>
            <div className="itemss">
              <div className="arr">
              <Link to="/">Home</Link>
              <Link to="/Books">Books</Link>
              <Link to="/Genres">Genres</Link>
              <Link to="/dashboard">Status</Link>
              <Link to="/Feedback">FeedbackForm</Link>
              <Link to="/Wishlist">Favourites</Link>
              <Link to="/FeedbackFormMicro">FeedbackFormMicro</Link>
              <Link to="/Login">Logout</Link>
              
              </div>
              
              <div className="other">
                
              </div>
            </div>
          </nav>
        </header>

        <section>
          <div className="container11">
            <div className="row1">
              <div className="info1">
                <h2 className="hero-heading">What Book are You Looking For</h2>
                <p className="hero-sub-heading">Not Sure What to Read Next? Explore our Catalog</p>
                <div className="hoho">
                <img src="https://i.pinimg.com/236x/4d/f5/9e/4df59e069a562342994b194f44d4847c.jpg"/>
                </div>
                <div className="users">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80"
                    alt="User"
                    className="img-fluid user"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80"
                    alt="User"
                    className="img-fluid user"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80"
                    alt="User"
                    className="img-fluid user"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80"
                    alt="User"
                    className="img-fluid user"
                  />
                  <p>4M+ Book Lovers Joined</p>
                </div>
                <button className="Explore-Now"><Link to="/Books">Explore Now</Link></button>
            
              </div>
              <div className="hero-image"></div>
            </div>
          </div>
        </section>
        <div>
          <h1 className="Books">On Trending Books</h1>
        </div>
        <div className="containerrs">
          <div className="image">
            <Link to="/secretly">
              <img
                src="https://shereads.com/wp-content/uploads/2023/02/secretly-yours-5.jpg"
                className="imggal"
                alt="Trending Book 1"
              />
            </Link>
          </div>

          <div className="image1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWmPCRutS7Y9SSMICHB3L4XTSr1HMTEN0Iw&usqp=CAU"
              className="img1"
              alt="Trending Book 2"
            />
          </div>
          <div className="image2">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2023_18/1941806/41otdhp8e8l-_ac_sy780_.jpg"
              className="img2"
              alt="Trending Book 3"
            />
          </div>
          <div className="image3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyiWPuF0rU71UImj9z_E9ZmkCmq9zLhzrcw&usqp=CAU"
              className="img3"
              alt="Trending Book 4"
            />
          </div>
          <div className="image4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYO2zm6eg0tUUltDAyX4rbm8sa8DW1klcLrQAvQFYrpdkDU8rtdGIQEXCFGFCegESQP8&usqp=CAU"
              className="img4"
              alt="Trending Book 5"
            />
          </div>
          <div className="image5">
            <img
              src="https://m.media-amazon.com/images/I/51OoDlblLaL._SL500_.jpg"
              className="img5"
              alt="Trending Book 6"
            />
          </div>
          <div className="image6">
            <img
              src="https://www.jagranjosh.com/imported/images/E/Articles/storiezzzzz.jpg"
              className="img6"
              alt="Trending Book 7"
            />
          </div>
          <div className="image7">
            <img
              src="https://orion-uploads.openroadmedia.com/md_59e0f5f307ed-must-read-fantasy-books-series-his-majesty-dragon.jpg"
              className="img7"
              alt="Trending Book 8"
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="wrapper">
          <ul className="footer-links">
            <li>
              <a href={img1} target="_blank">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href={img2} target="_blank">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href={img3} target="_blank">
                FAQ
              </a>
            </li>
            <li>
              <a href={img4} target="_blank">
                Contact Info
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Home;
