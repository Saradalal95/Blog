import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
const axios = require("axios").default;
const AddPost = (props) => {
  const [body, setBody] = useState("");
  const handleBody = (e) => {
    inputRef.current.value = e;
  };

  const inputTitleRef = useRef();
  const inputRef = useRef();

  const addPost = async (postTitle, postContent) => {
    // TODO
    try {
      axios
        .post("http://localhost:3001/posts/", {
          title: postTitle,
          content: postContent,
        })
        .then((response) => {
          props.sendGetRequest({ body });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addPostOnClick = async () => {
    addPost(inputTitleRef.current.value, inputRef.current.value);
    setBody("");
  };

  return (
    <div>
      <div className="background-container">
        <img src="../img/image.jpg " />
      </div>
      <Form className="m-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Post title</Form.Label>
          <Form.Control
            ref={inputTitleRef}
            placeholder="add the title"
            className="mt-2 mb-5"
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
        <Link to="/mysite">
          <Button
            className="mt-3 add-button"
            onClick={() => addPostOnClick()}
            variant="primary"
            type="submit"
          >
            Add
          </Button>
        </Link>
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
