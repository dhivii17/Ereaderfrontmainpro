import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="containersss">
      <h1>Welcome to Our Hamlet EReader Website</h1>
      <p>Please select the appropriate login option:</p>
      <Link to="/SignIn">User Login</Link>
      <br />
      <Link to="/Adminlogin">Admin Login</Link>

    </div>
  );
};

export default LandingPage;
