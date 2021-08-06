import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const footer = () => {
  return (
    <footer>
      <div className="icons-container">
        <a href="https://www.facebook.com/sara.eid.75286/" target="blank">
          <AiFillFacebook size={30} />
        </a>
        <a href="https://github.com/Saradalal95" target="blank">
          <AiFillGithub size={30} color="black" />
        </a>
        <a href="https://www.linkedin.com/in/saradalal/" target="blank">
          <ImLinkedin size={25} />
        </a>
      </div>
      <div>
        &copy;2021 made with <BsFillHeartFill style={{ color: "red" }} /> by
        Sara Eid Dalal
      </div>
    </footer>
  );
};

export default footer;
