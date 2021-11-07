// project imgs
import sharePlacesPNG from "../../assets/projects/shareplaces.png";
import chatApp from "../../assets/projects/chatApp.png";
import scrollWheel from "../../assets/projects/ScrollWheel.png";
import bitsNbytes from "../../assets/projects/bitsNbytes.png";
import artivaticAI from "../../assets/projects/artivaticAI.png";
import poshn from "../../assets/projects/poshn.png";
import loginPage from "../../assets/projects/signin-signup-form.png";
import faqAccordion from "../../assets/projects/faqAccordion.png";
// icons
import {
  CSS,
  HTML,
  Firebase,
  Git,
  Javascript,
  JWT,
  MongoDB,
  Netlify,
  NodeJS,
  OwlCarousel,
  PWA,
  ReactJS,
  Sass,
} from "../Icons";

const allProjectsInfo = [
  {
    title: "sharePlaces",
    imgSrc: sharePlacesPNG,
    info: "It is an app where users can create account and share places they have visited with other peoples.",
    tech: [CSS, ReactJS, NodeJS, MongoDB, JWT, Firebase],
    liveLink: "https://shareplaces-eb4eb.web.app/",
    githubLink: "https://github.com/Rohit21Je2k/sharePlaces",
  },
  {
    title: "chatApp",
    imgSrc: chatApp,
    info: "A PWA which lets people create rooms and chat with people.",
    tech: [HTML, CSS, Javascript, NodeJS, PWA, Firebase],
    liveLink: "https://chatappweb-92e7e.web.app/",
    githubLink: "https://github.com/Rohit21Je2k/chatApp",
  },
  {
    title: "scrollWheel",
    imgSrc: scrollWheel,
    info: "This was made using ScrollMagic, in this the page stays still and content changes.",
    tech: [HTML, CSS, Javascript, OwlCarousel],
    liveLink: "https://slider-ee80a.web.app/",
    githubLink: "https://github.com/Rohit21Je2k/scrollAnimation/tree/master",
  },
  {
    title: "bitNbytes",
    imgSrc: bitsNbytes,
    info: "This is a project I worked on as a Frontend Developer at Banao Technologies",
    tech: [CSS, ReactJS, Git, Netlify],
    liveLink: "https://vigilant-montalcini-94c42d.netlify.app/",
    githubLink: "https://github.com/Rohit21Je2k/bitsNbytes",
  },
  {
    title: "artivaticAI",
    imgSrc: artivaticAI,
    info: "This is a project I worked on as a Frontend Developer at Banao Technologies",
    tech: [CSS, ReactJS, Git, Netlify],
    liveLink: "https://happy-hawking-1a804b.netlify.app/",
    githubLink: "https://github.com/Rohit21Je2k/artivatic",
  },
  {
    title: "Poshn",
    imgSrc: poshn,
    info: "This is a project I worked on as a Frontend Developer at Banao Technologies",
    tech: [CSS, ReactJS, Git, Netlify],
    liveLink: "https://focused-goldwasser-25bfc4.netlify.app/index.html",
    githubLink: "https://github.com/Rohit21Je2k/poshn",
  },
  {
    title: "loginPage",
    imgSrc: loginPage,
    info: "This is template design I recreated after seeing it in a yt video.",
    tech: [HTML, Sass, Javascript],
    liveLink:
      "https://rohit21je2k.github.io/Frontend-Web-Templates/sign-in-sign-up-form/sliding/index.html",
    githubLink:
      "https://github.com/Rohit21Je2k/Frontend-Web-Templates/tree/main/sign-in-sign-up-form/sliding",
  },
  {
    title: "faqAccordion",
    imgSrc: faqAccordion,
    info: "This is a practice problem I did from Frontend Mentor.",
    tech: [HTML, Sass, Javascript],
    liveLink:
      "https://rohit21je2k.github.io/Frontend-Web-Templates/accordion/faq-accordion/index.html",
    githubLink:
      "https://github.com/Rohit21Je2k/Frontend-Web-Templates/tree/main/accordion/faq-accordion",
  },
];

export default allProjectsInfo;
