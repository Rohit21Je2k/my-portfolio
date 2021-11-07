import React from "react";

import { Phone, Mail, LinkedIn, Github } from "../Icons";

import "./MyDetails.css";

export default function MyDetails() {
  return (
    <div className="my-details">
      <div className="wrapper">
        <h1 className="my-details__name">Hi, I am Rohit</h1>
        <h2 className="my-details__role">Full Stack MERN Web Developer</h2>
        <div className="my-details__contacts">
          <span className="my-details__contacts-number">
            <Phone className="my-details__contacts-icon" />
            9667762407
          </span>
          <span className="my-details__contacts-email">
            <Mail className="my-details__contacts-icon" />
            rohit21je2k@gmail.com
          </span>
          <span className="my-details__contacts-linkedIn">
            <LinkedIn className="my-details__contacts-icon" />
            <a href="https://www.linkedin.com/in/rohit21je2k/" target="_blank">
              LinkedIN
            </a>
          </span>
          <span className="my-details__contacts-github">
            <Github className="my-details__contacts-icon" />
            <a href="https://github.com/Rohit21Je2k" target="_blank">
              Github
            </a>
          </span>
        </div>
        <hr className="my-details__underline" />
      </div>
    </div>
  );
}
