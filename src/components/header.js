import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);
  const handleCloseSignin = () => setSignin(false);
  const handleShowSignin = () => setSignin(true);
  const handleCloseSignup = () => setSignup(false);
  const handleShowSignup = () => setSignup(true);

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
      <div className="button-container">
        <Button className="signInBtn" onClick={handleShowSignin}>
          sign in
        </Button>
        <Button className="signInBtn" onClick={handleShowSignup}>
          sign up
        </Button>
      </div>
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
          <label for="email" className="labelClass">
            Email:
          </label>
          <input
            className="inputClass"
            id="email"
            name="email"
            placeholder="enter your email"
          />
          <br />
          <label for="password" className="labelClass">
            Password:
          </label>
          <input
            className="inputClass"
            id="password"
            name="password"
            placeholder="enter your password"
          />
          <br />
          <label className="labelClass">Confirm Password:</label>
          <input className="inputClass" placeholder="confirm password" />
          <Button className="mt-5 modalButton">Sign up</Button>
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
          <label for="email" className="labelClass">
            Email:
          </label>
          <input
            className="inputClass"
            id="email"
            name="email"
            placeholder="enter your email"
          />
          <br />
          <label for="password" className="labelClass">
            Password:
          </label>
          <input
            className="inputClass"
            id="password"
            name="password"
            placeholder="enter your password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="modalButtonSignIn"
            style={{ marginRight: "auto" }}
            onClick={handleShowSignin}
          >
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
