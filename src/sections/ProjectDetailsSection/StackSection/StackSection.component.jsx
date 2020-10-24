import React from "react";

import "./StackSection.style.scss";

const StackSection = () => {
  return (
    <section className="stack__container" id="stack">
      <div className="stack__header">Stack Details</div>
      <div className="stack__subtitle__container">
        <div className="stack__subtitle--1 stack__subtitle">
          React’s Context API came in really useful here! From theme switching,
          to populating our SideBar’s dropdown details and storing all of our
          backend’s data in state on mount, it handled the gamut of challenges I
          threw at it.
        </div>
        <div className="stack__subtitle--2 stack__subtitle">
          Speaking of our backend, I elected to use firebase to store our
          information. This was done since I wanted an easy to use storage
          solution.
        </div>
      </div>
    </section>
  );
};

export default StackSection;
