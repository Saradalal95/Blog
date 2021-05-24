import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/esm/Switch";
import MySite from "./components/mysite";
import AddPost from "./components/addpost";
import "./css/style.css";
import "../node_modules/react-quill/dist/quill.snow.css";
import Post from "./components/post";
import EditPost from "./components/editpost";
import Home from "./components/home";
const axios = require("axios").default;
const App = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    sendGetRequest();
  }, []);
  const sendGetRequest = async () => {
    try {
      await axios
        .get("http://localhost:3002/posts/")
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
        <Route exact path="/mysite">
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
