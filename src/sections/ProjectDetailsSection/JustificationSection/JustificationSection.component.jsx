import React from "react";

import "./JustificationSection.style.scss";

const JustificationSection = ({ project: { justification } }) => {
  return (
    <section className="justification__container" id="justification">
      <div className="justification__header">Why make this?</div>

      <div className="justification__subtitle">{justification}</div>
    </section>
  );
};

export default JustificationSection;
