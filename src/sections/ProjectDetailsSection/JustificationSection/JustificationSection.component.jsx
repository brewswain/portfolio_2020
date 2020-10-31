import React from "react";

import "./JustificationSection.style.scss";

const JustificationSection = ({
  project: {
    justification,
    justification_1,
    justification_2,
    justificationLink,
    justificationUrl,
  },
}) => {
  return (
    <section className="justification__container" id="justification">
      <div className="justification__header">Why make this?</div>

      {justification && (
        <div className="justification__subtitle">{justification}</div>
      )}

      {/* this view is for if our justification is a bit more detailed */}
      <div className="justification__wrapper">
        <div className="justification__subtitle justification__details">
          {justification_1}
        </div>
        <a
          href={justificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="justification__subtitle justification__details justification__link"
        >
          {justificationLink}
        </a>
        <div className="justification__subtitle justification__details">
          {justification_2}
        </div>
      </div>
    </section>
  );
};

export default JustificationSection;
