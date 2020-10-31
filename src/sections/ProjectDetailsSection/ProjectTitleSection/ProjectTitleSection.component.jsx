import React from "react";

import "./ProjectTitleSection.style.scss";

const ProjectTitleSection = ({
  project,
  project: { title, overview, stack, fullPageScreenshotUrl },
}) => {
  return (
    <section className="project__introduction" id="top">
      <div className="project__section__container">
        <div className="project__title__container">
          <div className="project__title__header">{title}</div>
          <div className="project__title__subtitle">{overview}</div>
        </div>
        <div className="project__stack__container">
          <div className="project__title__subheader">Stack</div>
          <div className="project__title__subtitle">
            <ul className="project__stack__items">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <img
        src={fullPageScreenshotUrl}
        alt="Fullpage screenshot"
        className="project__title__screenshot"
      />
    </section>
  );
};

export default ProjectTitleSection;
