import React from "react";

import "./Project.css";

export default function Project(props) {
  const { index, title, imgSrc, info, tech, liveLink, githubLink } = props;
  let style;
  if (index % 2 === 0) {
    const random =
      Math.floor(Math.random() * 3).toString() +
      Math.floor(Math.random() * 9).toString() +
      "0";
    style = { backgroundColor: `hsl(${random}, 80%, 90%)` };
    console.log(random);
  }

  return (
    <div className="project" style={style ? style : null}>
      <div className="project__wrapper wrapper">
        <div className="project__details">
          <h3 className="project__title">{title}</h3>
          <p className="project__info">{info}</p>
          <div className="project__tech">
            {tech &&
              tech.map((Icon) => {
                return <Icon className="project__tech-icon" />;
              })}
          </div>
          <div className="project__links">
            <a className="project__live-btn" href={liveLink} target="_blank">
              Live Demo
            </a>
            <a
              className="project__github-btn"
              href={githubLink}
              target="_blank"
            >
              Github Repo
            </a>
          </div>
        </div>
        <div className="project__img-container">
          <img className="project__img" src={imgSrc} />
        </div>
      </div>
    </div>
  );
}
