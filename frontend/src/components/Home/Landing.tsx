import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="left">
        <div className="logo">
          <img src="logo.png" width="1300" />
          <Link to="/login">
          <button className="button">Login</button>
          </Link>
          <Link to="/Signup">
            <button className="sgnup">Sign Up</button>
          </Link>
        </div>

        <div className="title-large"></div>
        <div className="title-large"></div>
        <div className="title-small"></div>

        <div className="button-wrapper">
          

          
        </div>
      </div>

      <div className="right">
        <img src="" />
      </div>
    </div>
  );
};

export default Landing;
