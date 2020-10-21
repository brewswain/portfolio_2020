import React from "react";

import "./ProjectSection.style.scss";

const ProjectSection = () => (
  <section className="section__projects" id="projects">
    <div className="projects__container">
      {/* <CompletedProjects /> */}
      <h1 className="section__header">What I've done so far</h1>
      <div className="projects__grid">
        <div className="placeholder__project"></div>
        <div className="placeholder__project"></div>
        <div className="placeholder__project"></div>
        <div className="placeholder__project"></div>
      </div>

      {/* <UpcomingProject /> */}
      <h1 className="section__header">What I'm working on</h1>
      <div className="projects__upcoming">
        <div className="placeholder__project"></div>
      </div>
    </div>
  </section>
);

export default ProjectSection;
