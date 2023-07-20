import React from "react";
import "./header.css";
import CTA from "./cta";
import Me from "../../assets/me.png";
import Socials from "../header/socials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello , I am</h5>

        <h1>Samuel Joseph Daniel</h1>
        <h5 className="text-light">Mobile and Web Developer</h5>

        <CTA />
        <Socials />
        <div className="me">
          <img src={Me} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
