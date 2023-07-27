import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbars">
        <div className="nav-container">
          <NavLink exact to="/Read" className="nav-logo">
            Hamlet
            
          </NavLink>
          

          <ul className={click ? "nav-menu active" : "nav-menu"}>
         

           
            <li className="nav-item">
              <NavLink
                exact
                to="/Addbooks"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Book
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Viewbooks"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View Books
              </NavLink>
            </li>
           
            
            <li className="nav-item">
              <NavLink
                exact
                to="/Updatebooks"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Update Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Deletebooks"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Delete Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Feed"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ViewFeedback
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Adminlogin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Logout
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;