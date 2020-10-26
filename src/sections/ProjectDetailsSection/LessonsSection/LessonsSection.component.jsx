import React from "react";

import "./LessonsSection.style.scss";

const LessonsSection = ({
  project: { lessons, lessonsEmoji, lessonsEmojiLabel },
}) => {
  return (
    <section className="lessons__container" id="lessons">
      <div className="lessons__header">What I learned</div>

      <div className="lessons__subtitle__container">
        <div className="lessons__subtitle">
          {lessons}
          <span role="img" aria-label={lessonsEmojiLabel}>
            {" "}
            {lessonsEmoji}
          </span>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
