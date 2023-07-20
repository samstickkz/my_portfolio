import React from "react";
import { BsLinkedin } from "react-icons/bs";

const socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/samuel-joseph-samstickkz/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://twitter.com/Obong_samjoe"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>{" "}
      <a
        href="https://www.tiktok.com/@obong_samjoe"
        target="_blank"
        rel="noreferrer"
      >
        TikTok
      </a>
      <a href="https://github.com/samstickkz" target="_blank" rel="noreferrer">
        Github
      </a>
    </div>
  );
};

export default socials;
