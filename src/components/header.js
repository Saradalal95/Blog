import React, { useState } from "react";
import axios from "axios";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import baseUrl from "../baseurl";
const Header = () => {
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);
  const handleCloseSignin = () => setSignin(false);
  const handleShowSignin = () => setSignin(true);
  const handleCloseSignup = () => setSignup(false);
  const handleShowSignup = () => setSignup(true);
  const [userSignup, setUserSignup] = useState({});
  const [userSignin, setUserSignin] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);

  const myStorage = window.localStorage;
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);

  console.log(userSignup);

  const handleChangeSignup = (evt) => {
    setUserSignup({
      ...userSignup,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleChangeSignin = (evt) => {
    setUserSignin({
      ...userSignin,
      [evt.target.name]: evt.target.value,
    });
  };
  const submitSignup = async () => {
    try {
      const response = await axios.post(baseUrl + "/users", userSignup);
      console.log("response", response);
      myStorage.setItem("token", response.data);
      window.location.replace("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  const submitSignin = async () => {
    try {
      const response = await axios.post(baseUrl + "/users/login", {
        email: userSignin.email,
        password: userSignin.password,
      });
      myStorage.setItem("token", response.data.token);
      myStorage.setItem("user", JSON.stringify(response.data));

      window.location.replace("/");
      console.log(userSignin);
    } catch (error) {
      if (!localStorage.getItem("token")) {
        alert("wrong email or password please try again");
      }
      console.log(error.response);
    }
  };
  const signOutOnClick = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  return (
    <div className="header-main-container">
      <ul className="header-container">
        <li className="list-item">
          <Link to="/" className="header-item">
            Home /
          </Link>
        </li>
        <li className="list-item">
          <Link to="/mysite" className="header-item">
            MySite /
          </Link>
        </li>
        <li className="list-item">
          <Link to="/addpost" className="header-item">
            NewPost /
          </Link>
        </li>
      </ul>
      {localStorage.getItem("token") ? (
        <DropdownButton
          id="dropdown-item-button"
          title={user.name}
          variant="dark"
          className="startBtn"
        >
          {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
          <div className="startNow-container">
            <Button className="signInBtn" onClick={signOutOnClick}>
              sign out
            </Button>
          </div>
        </DropdownButton>
      ) : (
        <DropdownButton
          id="dropdown-item-button"
          title="start now"
          variant="dark"
          className="startBtn"
        >
          {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
          <div className="startNow-container">
            <Button className="signInBtn" onClick={handleShowSignin}>
              sign in
            </Button>
            <Button className="signInBtn" onClick={handleShowSignup}>
              sign up
            </Button>
          </div>
        </DropdownButton>
      )}

      {/* <div className="button-container">
        <Button className="signInBtn" onClick={handleShowSignin}>
          sign in
        </Button>
        <Button className="signInBtn" onClick={handleShowSignup}>
          sign up
        </Button>
        <Button className="signInBtn" onClick={signOutOnClick}>
          sign out
        </Button>
      </div> */}
      <Modal
        show={signup}
        onHide={handleCloseSignup}
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle">Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="name" className="labelClass">
            Name:
          </label>
          <input
            className="inputClass"
            id="name"
            name="name"
            placeholder="enter your name"
            onChange={handleChangeSignup}
          />
          <label htmlFor="email" className="labelClass">
            Email:
          </label>
          <input
            className="inputClass"
            id="email"
            name="email"
            placeholder="enter your email"
            onChange={handleChangeSignup}
          />
          <br />
          <label htmlFor="password" className="labelClass">
            Password:
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            onChange={handleChangeSignup}
            className="inputClass"
            id="password"
            name="password"
            placeholder="enter your password"
          />
          <br />
          <label htmlFor="password" className="labelClass">
            Confirm Password:
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            name="confirmPassword"
            id="password"
            className="inputClass"
            placeholder="confirm password"
            onChange={handleChangeSignup}
          />

          <Button className="mt-5 modalButton" onClick={submitSignup}>
            Sign up
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <p className="modalP">Already have an account?</p>
          <Button
            className="modalButton"
            variant="primary"
            onClick={handleShowSignup}
          >
            Sign in here
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={signin}
        onHide={handleCloseSignin}
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modalTitle mb-4">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <label htmlFor="email" className="labelClass">
            Email:
          </label>
          <input
            onChange={handleChangeSignin}
            className="inputClass"
            id="email"
            name="email"
            placeholder="enter your email"
          />
          <br />
          <label htmlFor="password" className="labelClass">
            Password:
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            onChange={handleChangeSignin}
            className="inputClass"
            id="password"
            name="password"
            placeholder="enter your password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={submitSignin}
            variant="primary"
            className="modalButtonSignIn"
            style={{ marginRight: "auto" }}
          >
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
