import React from "react";

import Project from "../Project/Project";
import allProjectsInfo from "./allProjectInfo";

import "./PortFolio.css";

export default function PortFolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">My PortFolio</h1>
      {allProjectsInfo.map((project, index) => {
        return (
          <Project
            key={index}
            index={index}
            title={project.title}
            info={project.info}
            tech={project.tech}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            imgSrc={project.imgSrc}
          />
        );
      })}
    </div>
  );
}
