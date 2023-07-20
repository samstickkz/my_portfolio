import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>

      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years Experience</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years Experience</small>
            </article>{" "}
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years Experience</small>
            </article>
          </div>
          <p>
            I am a talented UI/UX designer, React web developer, and a Flutter
            developer. With a passion for blending aesthetics and functionality,
            I create exceptional digital experiences. My expertise in React
            enables me to build responsive web applications, while my
            proficiency in Flutter allows me to craft elegant cross-platform
            mobile apps for IOS and ANDROID. With a dedication to innovation and user-centered
            design, I consistently deliver high-quality solutions that exceed
            expectations.
          </p>
          <a href="#contact" className="btn btn_primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
