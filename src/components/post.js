import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import baseUrl from "../baseurl";
const axios = require("axios").default;

const Post = (props) => {
  const { id } = useParams();
  const foundPost = props.showPost.find((post) => id === post._id);
  const user = JSON.parse(localStorage.getItem("user"));
  // const deletePostOnClick = async (id) => {
  //   try {
  //     axios
  //       .delete(`http://localhost:3001/posts/${id}`, {
  //         data: { id: id },
  //       })
  //       .then((response) => props.sendGetRequest());
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   console.log(id);
  // };
  const deletePostOnClick = async (id) => {
    try {
      axios
        .delete(`${baseUrl}/posts/${id}`, {
          headers: {
            auth: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          props.sendGetRequest();
          response.data === "notauth"
            ? alert("Not authorize to delete others post")
            : window.location.replace("/mysite");
        });
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  };
  const checkUser = () => {
    if (foundPost.userId.name !== user.name) {
      alert("you can not update this post it belongs to someone else");
    } else {
      window.location.replace(`/editpost/${foundPost._id}`);
    }
  };
  return (
    <div className="post-main-container ">
      <div className="background-container">
        <img src="../img/pencils-762555_1920.jpg" />
      </div>
      {foundPost ? (
        <Card style={{ width: "35rem" }} className="p-4">
          <Card.Body className="m-auto">
            <Card.Title style={{ fontSize: "1.5rem" }}>
              {foundPost.title}
            </Card.Title>
            <Card.Text
              className="post-content"
              dangerouslySetInnerHTML={{ __html: foundPost.content }}
            ></Card.Text>
          </Card.Body>
          <span className="button-container">
            <Button
              className="button"
              onClick={() => {
                deletePostOnClick(foundPost._id);
              }}
            >
              delete
            </Button>
            <Button onClick={checkUser} className="button">
              Edit
            </Button>
          </span>
        </Card>
      ) : null}
    </div>
  );
};

export default Post;
