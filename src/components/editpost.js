import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import { Link, useParams } from "react-router-dom";
const axios = require("axios").default;
const EditPost = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  // const inputTitleRef = useRef();
  // const inputRef = useRef();

  useEffect(() => {
    const foundPost = props.edit.find((post) => id === post._id);
    if (foundPost && id) {
      setTitle(foundPost.title);
      setContent(foundPost.content);
    }
  }, [id, props.edit]);

  const handleBody = (data) => {
    setContent(data);
  };

  const quillValue = (quillContent) => {
    if (!quillContent) {
      const foundPost = props.edit.find((post) => post._id === id);
      if (foundPost) {
        return foundPost.content;
      }
    } else {
      return quillContent;
    }
  };
  const updateBlogs = async (title, content) => {
    var data = { title, content };
    try {
      axios.put(`http://saras-blog.herokuapp.com/posts/${id}`, data).then((res) => {
        props.sendGetRequest();
        window.location.replace("/mysite");
      });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="add the title"
            className="mt-2 mb-5 title"
          />
        </Form.Group>
        <Form.Group>
          <div className="quill">
            <ReactQuill
              value={quillValue(content)}
              onChange={handleBody}
              placeholder="write new post .."
              modules={EditPost.modules}
              formats={EditPost.formats}
              onChange={handleBody}
            />
          </div>
        </Form.Group>
        <Button
          onClick={() => {
            updateBlogs(title, content);
          }}
        >
          Save
        </Button>
      </Form>
    </div>
  );
};
EditPost.modules = {
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

EditPost.formats = [
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
export default EditPost;
