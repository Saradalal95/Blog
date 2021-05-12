import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";

const AddPost = () => {
  const [body, setBody] = useState("");
  const handleBody = (e) => {
    setBody(e);
  };
  return (
    <div>
      <Form className="m-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Post title</Form.Label>
          <Form.Control
            type="email"
            placeholder="add the title"
            className="mt-2 mb-5"
          />
        </Form.Group>
        <div className="quill">
          <ReactQuill
            placeholder="write new post .."
            modules={AddPost.modules}
            formats={AddPost.formats}
            onChange={handleBody}
            value={body}
          />
        </div>

        <Button variant="primary" type="submit">
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
