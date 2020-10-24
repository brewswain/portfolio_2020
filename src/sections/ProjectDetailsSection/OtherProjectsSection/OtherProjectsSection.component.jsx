import React, { useState } from "react";

import "./OtherProjectsSection.style.scss";

import { Link } from "react-router-dom";

import ProjectSummary from "../../../data/ProjectSummary.data";

const OtherProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <section className="projects__feed" id="projects">
      {/* TODO: Make a filter to ensure that only projects that aren't selected
                show up here (Probably using currentProject or some form of state
                to accomplish that)
            */}
      {ProjectSummary.map((project) => (
        <div className="project__card" key={project.id}>
          <div className="project__header">
            <div className="project__title">{project.title}</div>
          </div>
          <img src={project.imageUrl} alt="hi :)" className="project__image" />
          <div className="project__description">{project.description}</div>
          <div className="link__container">
            <Link
              to="/projects"
              className="project__link"
              onClick={() => {
                setCurrentProject(project.title);
              }}
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OtherProjectsSection;
