import React from "react";

import "./JustificationSection.style.scss";

const JustificationSection = () => {
  return (
    <section className="justification__container" id="justification">
      <div className="justification__header">Why make this?</div>

      <div className="justification__subtitle">
        The more projects I build, the more I realise the importance of having
        some snippets of reusable code to make an initial setup smoother.Even
        though there are myriads of component libraries, there are often small
        reasons that lead to me wanting to use a specific vision of a component
        (See: I prefer to know that my personal projects have as much code
        written directly by me as possible.)
      </div>
    </section>
  );
};

export default JustificationSection;
