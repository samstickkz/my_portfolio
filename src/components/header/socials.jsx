import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { VscGithubInverted } from "react-icons/vsc";

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
      <a href="https://twitter.com/samstickkz" target="_blank" rel="noreferrer">
        <FaTwitterSquare />
      </a>{" "}
      <a
        href="https://www.tiktok.com/@samstickkz.dev"
        target="_blank"
        rel="noreferrer"
      >
        <RiTiktokLine />
      </a>
      <a href="https://github.com/samstickkz" target="_blank" rel="noreferrer">
        <VscGithubInverted />
      </a>
    </div>
  );
};

export default socials;
