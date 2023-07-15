import React, { useRef } from "react";
import "./contact.css";
import { BiMailSend } from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m2aymt8",
        "template_tuyjoji",
        form.current,
        "zfxD22suE-rAZaPzr"
      )
      
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
     
     
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <BiMailSend className="contact_option_icon" />
            <h4>Email</h4>
            <h5>samjoerich@gmail.com</h5>
            <a
              href="mailto:samjoerich@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <FiTwitter className="contact_option_icon" />
            <h4>Email</h4>
            <h5>samjoerich@gmail.com</h5>
            <a
              href="mailto:samjoerich@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>{" "}
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>samjoerich@gmail.com</h5>
            <a
              href="https://api.whatsapp.com/?phone?=+2347032346910"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your message here"
            required
          ></textarea>
          <button type="submit" className="btn btn_primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
