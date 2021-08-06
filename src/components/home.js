import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="welcome-header">
        Welcome to My Blog
        <img src="../img/logo.png" alt="logo" className="logo" />
      </h1>
      {/* 
      <form style={{ textAlign: "center" }}>
        <p>Enter your name : </p>
        <input
          type="text"
          onChange={(event) => localStorage.setItem("user.name", event.target.value)}
        ></input>
      </form> */}
      <div className="home-container">
        <div className="illustrations-container">
          <img src="../img/02.png" />
          <div class="overlay">
            <div class="text">
              <Link to="/addpost" className="overlay-text">
                Share your thoughts
              </Link>
            </div>
          </div>
        </div>
        <div className="illustrations-container">
          <img src="../img/2.png" />
          <div class="overlay">
            <div class="text">
              <Link to="/mysite" className="overlay-text">
                browse all posts
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <h6 className="footer">
        Welcome to My Blog {localStorage.getItem("user.name")}
      </h6> */}
    
    </div>
  );
};

export default Home;
