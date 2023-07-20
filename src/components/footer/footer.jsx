import React from "react";
import "./footer.css";

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
        <a href="https://www.linkedin.com/in/samuel-joseph-samstickkz/">
          LinkedIn
        </a>
        <a href="https://twitter.com/Obong_samjoe">Twitter</a>
        <a href="https://www.tiktok.com/@obong_samjoe">TikTok</a>
      </div>

      <div className="copyright">
        <small>&copy; samuel Joseph</small>
      </div>
    </footer>
  );
};

export default footer;
