import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"; // Import your CSS file for styling
import imgSrc from '../../Assets/trip_advisor_logo.png';
const NotLoggedln = () => {
  return (
    <div className="not-logged-in-container">
       <div className="login-image">
          <img src={imgSrc} alt="Login" />
        </div>
        <div className="OtherSide">
      <div className="message">Please Log In First Then use our App</div>
      <center>
      <Link to="/">
        <button className="logins-button">Login</button>
      </Link>
      </center>
      </div>
      </div>
    
  );
};

export default NotLoggedln;
