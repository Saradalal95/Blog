import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="welcome-header">
        Welcom to My Blog{" "}
        <img src="../img/logo.png" alt="logo" className="logo" />
      </h1>

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
    </>
  );
};

export default Home;
