import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
const axios = require("axios").default;
const MySite = (props) => {
  const deletePostOnClick = async (id) => {
    try {
      axios
        .delete("http://localhost:3002/posts/", {
          data: { id: id },
        })
        .then((response) => props.sendGetRequest());
    } catch (error) {
      console.log(error);
    }

    console.log(id);
  };

  return (
    <div>
      <div className="background-container">
        <img src="../img/pencils-762555_1920.jpg" />
      </div>
      <h2 className="posts-header">posts Collection</h2>
      {props.show.length < 1 ? (
        <p style={{ textAlign: "center", fontSize: "1.3rem" }}>
          There is no post yet
        </p>
      ) : (
        props.show.map((post, index) => (
          <ul key={index} className="posts-list">
            <span
              className="close-x"
              onClick={() => {
                deletePostOnClick(post.id);
              }}
            >
              x
            </span>
            <Link className="post" to={`/post/${post.id}`}>
              <li  className="post-title">{post.title}</li>
            </Link>
          </ul>
        ))
      )}
    </div>
  );
};

export default MySite;
