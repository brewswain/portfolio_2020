import React from "react";

import "./ProblemsSection.style.scss";

const ProblemsSection = ({
  project: { problems_1, problems_2, problems_3, problems_4 },
}) => {
  return (
    <section className="problems__container" id="problems">
      <div className="problems__header">Problems and their Solution</div>
      <div className="problems__subtitle__container">
        <div className="problems__subtitle">{problems_1}</div>
        <div className="problems__subtitle">{problems_2}</div>
        <div className="problems__subtitle">{problems_3}</div>
        <div className="problems__subtitle">{problems_4}</div>
      </div>
    </section>
  );
};

export default ProblemsSection;
