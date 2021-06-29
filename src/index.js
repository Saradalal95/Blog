import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/esm/Switch";
import MySite from "./components/mysite";
import AddPost from "./components/addpost";
import "../node_modules/react-quill/dist/quill.snow.css";
import Post from "./components/post";
import EditPost from "./components/editpost";
import Home from "./components/home";
import "./css/style.css";
const axios = require("axios").default;
const App = () => {
  const [post, setPosts] = useState([]);
  console.log(post);
  useEffect(() => {
    sendGetRequest();
  }, []);
  const sendGetRequest = async () => {
    try {
      await axios
        .get("http://localhost:3001/posts/")
        .then((response) => setPosts(response.data));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mysite">
          <MySite show={post} sendGetRequest={sendGetRequest} />
        </Route>
        <Route path="/addpost">
          <AddPost sendGetRequest={sendGetRequest} />
        </Route>
        <Route path="/post/:id">
          <Post showPost={post} sendGetRequest={sendGetRequest} />
        </Route>
        <Route path="/editpost/:id">
          {post && <EditPost edit={post} sendGetRequest={sendGetRequest} />}
        </Route>
  
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
