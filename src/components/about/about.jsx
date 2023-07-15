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
              <h5>Eperience</h5>
              <small>3+ years Expereince</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Eperience</h5>
              <small>3+ years Expereince</small>
            </article>{" "}
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Eperience</h5>
              <small>3+ years Expereince</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            excepturi nostrum totam quod repellat debitis amet? Cum non, minima
            aliquam quo quis ipsa amet dignissimos ab officiis animi eligendi
            voluptatem.
          </p>
          <a href="#contact" className="btn btn_primary">Lets Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
