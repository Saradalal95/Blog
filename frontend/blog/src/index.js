import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/esm/Switch";
import MySite from "./components/mysite";
import AddPost from "./components/addpost";
import "./css/style.css";
import "../node_modules/react-quill/dist/quill.snow.css";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MySite />
        </Route>
        <Route path="/addpost">
          <AddPost />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
