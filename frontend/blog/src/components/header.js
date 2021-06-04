import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  
      <ul className="header-container">
        <li className="list-item">
          <Link to="/" className="header-item">
            Home /
          </Link>
        </li>
        <li className="list-item">
          <Link to="/mysite" className="header-item">
            MySite /
          </Link>
        </li>
        <li className="list-item">
          <Link to="/addpost" className="header-item">
            NewPost /
          </Link>
        </li>
       
      </ul>

  );
};

export default Header;
