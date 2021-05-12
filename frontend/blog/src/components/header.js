import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="header-container">
      <li className="list-item">
        <Link to="/" className="header-item">
          My Site /
        </Link>
      </li>
      <li className="list-item">
        <Link to="/addpost" className="header-item">
          New Post /
        </Link>
      </li>
    </ul>
  );
};

export default Header;
