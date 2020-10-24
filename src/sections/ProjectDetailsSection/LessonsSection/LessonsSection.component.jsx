import React from "react";

import "./LessonsSection.style.scss";

const LessonsSection = () => {
  return (
    <section className="lessons__container" id="lessons">
      <div className="lessons__header">What I learned</div>

      <div className="lessons__subtitle__container">
        <div className="lessons__subtitle">
          This was the project that really cemented my comfort level with
          context API. I used it for theming, Sidebar and Page population, and
          even a global isLoaded flag. The problems I encountered above also
          helped improve my speed with debugging “but it worked in dev” style
          errors as shown by the whole Routing debacle{" "}
          <span role="img" aria-label="clown emoji">
            🤡
          </span>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
