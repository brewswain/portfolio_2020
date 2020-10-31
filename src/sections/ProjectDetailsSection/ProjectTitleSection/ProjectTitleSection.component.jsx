import React from "react";

import "./ProjectTitleSection.style.scss";

const ProjectTitleSection = ({
  project: {
    demoUrl,
    fullPageScreenshotUrl,
    github,
    heroPicUrl_1,
    heroPicUrl_2,
    overview,
    stack,
    title,
  },
}) => {
  return (
    <section className="project__introduction" id="top">
      <div className="project__section__container">
        <div className="project__title__container">
          <div className="project__title__header">{title}</div>
          <div className="project__title__subtitle">{overview}</div>
        </div>
        <div className="project__stack__container">
          <div className="project__title__subheader">
            Stack
            <div className="project__stack__subtitle">
              <ul className="project__stack__items">
                {stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {github && (
            <div className="project__title__subheader">
              Repository
              <div className="project__stack__subtitle">
                <a
                  className="project__stack__link"
                  href={github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Code
                </a>
              </div>
            </div>
          )}

          <div className="project__title__subheader">
            Demo
            <div className="project__stack__subtitle">
              <a
                className="project__stack__link"
                href={demoUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                View site
              </a>
            </div>
          </div>
        </div>
      </div>
      {fullPageScreenshotUrl && (
        <img
          src={fullPageScreenshotUrl}
          alt="Fullpage screenshot"
          className="project__title__screenshot"
        />
      )}
      <div className="project__hero__container">
        {heroPicUrl_1 && (
          <img
            src={heroPicUrl_1}
            alt="Hero Pic screenshot"
            className="project__title__hero"
          />
        )}
        {heroPicUrl_2 && (
          <img
            src={heroPicUrl_2}
            alt="Hero Pic screenshot"
            className="project__title__hero"
          />
        )}
      </div>
    </section>
  );
};

export default ProjectTitleSection;
