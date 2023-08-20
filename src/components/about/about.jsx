import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";


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
              <h5>Marketing</h5>
              <small>6+ years Experience</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Web Development</h5>
              <small>1 year Experience</small>
            </article>{" "}
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Mobile Development</h5>
              <small>2+ years Experience</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>UI/UX Design</h5>
              <small>2+ years Experience</small>
            </article>
          </div>
          <p>
            I am a talented Marketer, UI/UX designer, React web developer, and a Flutter
            developer. With a passion for blending aesthetics and functionality,
            I create exceptional digital experiences.
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
