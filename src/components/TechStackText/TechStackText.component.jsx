import React, { useEffect, useState } from "react";

import "./TechStackText.style.scss";

const TechStackText = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="techStack__container">
      <div className="techStack__text">
        <span className="techStack__firstLetter">M</span>
        <div
          className={`${
            isLoaded ? "techStack__word--visible" : null
          } techStack__word`}
        >
          ongoDB
        </div>
      </div>
      <div className="techStack__text">
        <span className="techStack__firstLetter">E</span>
        <div
          className={`${
            isLoaded ? "techStack__word--visible" : null
          } techStack__word`}
        >
          xpress
        </div>
      </div>
      <div className="techStack__text">
        <span className="techStack__firstLetter">R</span>
        <div
          className={`${
            isLoaded ? "techStack__word--visible" : null
          } techStack__word`}
        >
          eact
        </div>
      </div>
      <div className="techStack__text">
        <span className="techStack__firstLetter">N</span>
        <div
          className={`${
            isLoaded ? "techStack__word--visible" : null
          } techStack__word`}
        >
          ode.JS
        </div>
      </div>
    </div>
  );
};

export default TechStackText;
