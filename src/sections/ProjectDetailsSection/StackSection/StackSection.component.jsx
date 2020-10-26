import React from "react";

import "./StackSection.style.scss";

const StackSection = ({ project: { stackDetails_1, stackDetails_2 } }) => {
  return (
    <section className="stack__container" id="stack">
      <div className="stack__header">Stack Details</div>
      <div className="stack__subtitle__container">
        <div className="stack__subtitle--1 stack__subtitle">
          {stackDetails_1}
        </div>
        <div className="stack__subtitle--2 stack__subtitle">
          {stackDetails_2}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
