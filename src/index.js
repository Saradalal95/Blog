import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Switch from "react-bootstrap/esm/Switch";
import MySite from "./components/mysite";
import AddPost from "./components/addpost";
import "../node_modules/react-quill/dist/quill.snow.css";
import Post from "./components/post";

import EditPost from "./components/editpost";
import Home from "./components/home";
import Footer from "./components/footer";
import baseUrl from "./baseurl";
const axios = require("axios").default;
const App = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    sendGetRequest();
  }, []);
  const sendGetRequest = async () => {
    try {
      await axios
        .get(baseUrl + "/posts")
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
          <MySite show={posts} sendGetRequest={sendGetRequest} />
        </Route>
        <Route path="/addpost">
          <AddPost sendGetRequest={sendGetRequest} />
        </Route>
        <Route path="/post/:id">
          <Post showPost={posts} sendGetRequest={sendGetRequest} />
        </Route>
        <Route path="/editpost/:id">
          {posts && <EditPost edit={posts} sendGetRequest={sendGetRequest} />}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
