import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import { useHistory } from "react-router-dom";
import baseUrl from "../baseurl";
const axios = require("axios").default;
const AddPost = (props) => {
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState("");
  let history = useHistory();
  const handleBody = (e) => {
    inputRef.current.value = e;
  };
  const inputTitleRef = useRef();
  const inputRef = useRef();
  // const addPost = async (postTitle, postContent) => {
  //   try {
  //     const response = await axios.post("http://saras-blog.herokuapp.com/posts/", {
  //       title: postTitle,
  //       content: postContent,
  //     },
  //     // const response = await axios.post(
  //     //   baseUrl + "/posts",

  //         headers: {
  //           auth: localStorage.getItem("token"),
  //         },

  //     );
  const addPost = async (postTitle, postContent) => {
    try {
      const response = await axios.post(
        baseUrl + "/posts/",
        {
          title: postTitle,
          content: postContent,
        },
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      await props.sendGetRequest({ body });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const addPostOnClick = async () => {
    try {
      await addPost(inputTitleRef.current.value, inputRef.current.value);
      setBody("");
      history.push("/mysite");
    } catch (error) {
      if (!localStorage.getItem("token")) {
        alert("Please sign in to write post");
        window.location.replace("/");
      }
      setErrors(error.response.data);
    }
  };

  return (
    <div className="add-post-container">
      {errors && (
        <div className="errors">
          <h1>There are some errors below:</h1> <br />
          <ul>
            {errors["errors"]
              .map((error) => Object.entries(error))
              .map((element) => (
                <li>
                  {element[0][0]} - {element[0][1]}
                </li>
              ))}
          </ul>
        </div>
      )}
      {/* <div className="background-container">
        <img src="../img/image.jpg " />
      </div> */}

      <Form className="m-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Post title</Form.Label>
          <Form.Control
            ref={inputTitleRef}
            placeholder="add the title"
            className="mt-2 mb-5 title"
          />
        </Form.Group>
        <Form.Group>
          <div className="quill">
            <ReactQuill
              ref={inputRef}
              placeholder="write new post .."
              modules={AddPost.modules}
              formats={AddPost.formats}
              onChange={handleBody}
            />
          </div>
        </Form.Group>
        <Button
          className="mt-3 add-button"
          onClick={() => addPostOnClick()}
          variant="primary"
        >
          Add
        </Button>
      </Form>
    </div>
  );
};
AddPost.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
AddPost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
export default AddPost;
