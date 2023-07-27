import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./logo.css";


const Logo = () => {
    const history = useHistory();
  
    useEffect(() => {
      const redirectTimer = setTimeout(() => {
        history.push("/LandingPage");
      }, 5000);
  
      return () => clearTimeout(redirectTimer);
    }, [history]);
  
    return (
      <div className="logo-container">       
        <img src="https://i.postimg.cc/YGqZrp3m/Hamlet.png" alt="Logo" />        
      </div>
    );
  };
  
  export default Logo;