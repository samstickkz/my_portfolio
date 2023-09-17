import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { VscGithubInverted } from "react-icons/vsc";
const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Samuel Joseph
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>{" "}
        <li>
          <a href="#about">About</a>
        </li>{" "}
        <li>
          <a href="#contact">Contact</a>
        </li>{" "}
        <li>
          <a href="#experience">experience</a>
        </li>{" "}
        <li>
          <a href="#portfolio">portfolio</a>
        </li>{" "}
        <li>
          <a href="#services">services</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/samuel-joseph-samstickkz/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://twitter.com/samstickkz"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitterSquare />
        </a>
        <a
          href="https://www.tiktok.com/@obong_samjoe"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <RiTiktokLine />
        </a>
        <a
          href="https://github.com/samstickkz"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithubInverted />
        </a>
      </div>

      <div className="copyright">
        <small>&copy; Samuel Joseph</small>
      </div>
    </footer>
  );
};

export default footer;
