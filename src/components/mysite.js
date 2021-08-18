import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import baseUrl from "../baseurl";
const axios = require("axios").default;
const MySite = (props) => {
  // const deletePostOnClick = async (id) => {
  //   try {
  //     axios
  //       .delete(`${baseUrl}/posts/${id}`, {
  //         headers: {
  //           auth: localStorage.getItem("token"),
  //         },
  //       })
  //       .then((response) => {
  //         props.sendGetRequest();
  //         response.data === "notauth"
  //           ? alert(
  //               "you can only delete your posts! this post was published by someone else"
  //             )
  //           : window.location.replace("/mysite");
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(id);
  // };

  return (
    <div className="post-collection-container">
      <div className="background-mysite">
      </div>
      <h2 className="posts-header">posts Collection</h2>
      {props.show.length < 1 ? (
        <p style={{ textAlign: "center", fontSize: "1.3rem" }}>
          There is no post yet
        </p>
      ) : (
        props.show.map((post, index) => (
          <ul key={index} className="posts-list">
            {/* <span
              className="close-x"
              // onClick={() => {
              //   deletePostOnClick(post._id);
              // }}
            >
              x
            </span> */}
            <Link className="post" to={`/post/${post._id}`}>
              <li className="post-title">
                {post.title}
                <p style={{ fontSize: "1.5vw", marginTop: "1.8vh" }}>
                  posted by : {post.userId.name}
                </p>
              </li>
            </Link>
          </ul>
        ))
      )}
    </div>
  );
};

export default MySite;
