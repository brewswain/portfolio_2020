import React, { useContext } from "react";

import "./ProjectSection.style.scss";
import GitHubLogo from "../../../assets/PNG/github_Light.png";

import { NavBarContext, ProjectContext } from "../../../contexts";

import ProjectSummary from "../../../data/ProjectSummary.data";

import { Link } from "react-router-dom";

import { TerminalIcon } from "../../../assets";

const ProjectSection = () => {
  const { setSelectedProject } = useContext(ProjectContext);
  const { setIsHomePage } = useContext(NavBarContext);

  return (
    <section className="section__projects" id="projects">
      <div className="projects__container">
        {/* <CompletedProjects /> */}
        <h1 className="section__header">What I've done so far</h1>
        <div className="projects__grid">
          {ProjectSummary.map((project) => (
            <div className="project__card" key={project.id}>
              <div className="project__header">
                <div className="project__title">{project.title}</div>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <img src={GitHubLogo} alt="" className="github__icon" />
                  </a>
                ) : null}
              </div>
              <img
                src={project.imageUrl}
                alt="hi :)"
                className="project__image"
              />
              <div className="project__description">{project.description}</div>
              <div className="link__container">
                <Link
                  to="/projects"
                  className="project__link"
                  onClick={() => {
                    setSelectedProject(project.id);
                    setIsHomePage(false);
                    window.localStorage.setItem("storedProject", project.id);
                  }}
                >
                  View Details
                  <TerminalIcon className="link__icon" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* <UpcomingProject /> */}
        <h1 className="section__header">What I'm working on</h1>
        <div className="projects__upcoming">
          <div className="placeholder__project"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
