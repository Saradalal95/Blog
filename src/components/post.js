import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const axios = require("axios").default;
const Post = (props) => {
  const { id } = useParams();
  const foundPost = props.showPost.find((post) => id === post._id);
  const deletePostOnClick = async (id) => {
    try {
      axios
        .delete(`http://saras-blog.herokuapp.com/posts/${id}`, {
          data: { id: id },
        })
        .then((response) => props.sendGetRequest());
    } catch (error) {
      console.log(error);
    }

    console.log(id);
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
              href="/mysite"
              onClick={() => {
                deletePostOnClick(foundPost._id);
              }}
            >
              delete
            </Button>
            <Button className="button" href={`/editpost/${foundPost._id}`}>
              Edit
            </Button>
          </span>
        </Card>
      ) : null}
    </div>
  );
};

export default Post;
