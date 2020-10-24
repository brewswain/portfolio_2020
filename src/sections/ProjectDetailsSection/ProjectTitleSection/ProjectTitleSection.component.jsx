import React from "react";

import "./ProjectTitleSection.style.scss";

const ProjectTitleSection = () => {
  return (
    <section className="project__introduction" id="top">
      <div className="project__section__container">
        <div className="project__title__container">
          <div className="project__title__header">Project Title</div>
          <div className="project__title__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi
            ad, nobis magnam commodi tenetur, nemo quidem dolores cum harum
            alias accusamus tempora quo voluptatem eum porro fugiat incidunt
            minus?
          </div>
        </div>
        <div className="project__stack__container">
          <div className="project__title__subheader">Stack</div>
          <div className="project__title__subtitle">
            <ul className="project__stack__items">
              <li>React</li>
              <li>Firebase</li>
              <li>SASS</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src="https://placekitten.com/g/1080/1920"
        alt="Fullpage screenshot"
        className="project__title__screenshot"
      />
    </section>
  );
};

export default ProjectTitleSection;
