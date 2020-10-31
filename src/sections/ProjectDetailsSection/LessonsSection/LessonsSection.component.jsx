import React from "react";

import "./LessonsSection.style.scss";

const LessonsSection = ({
  project: { lessons, lessons_1, lessons_2, lessonsEmoji, lessonsEmojiLabel },
}) => {
  return (
    <section className="lessons__container" id="lessons">
      <div className="lessons__header">What I learned</div>

      <div className="lessons__subtitle__container">
        {lessons && (
          <div className="lessons__subtitle">
            {lessons}
            <span role="img" aria-label={lessonsEmojiLabel}>
              {" "}
              {lessonsEmoji}
            </span>
          </div>
        )}
        {lessons_1 && (
          <div className="lessons__subtitle">
            {lessons_1}
            <span role="img" aria-label={lessonsEmojiLabel}>
              {" "}
              {lessonsEmoji}
            </span>
          </div>
        )}
        {lessons_2 && (
          <div className="lessons__subtitle">
            {lessons_2}
            <span role="img" aria-label={lessonsEmojiLabel}>
              {" "}
              {lessonsEmoji}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default LessonsSection;
