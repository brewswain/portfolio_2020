import React from "react";

import "./HomePage.style.scss";

import { NavBar } from "../../partials";
import { PrimaryText, TechStackText } from "../../components";

const HomePage = () => {
  return (
    <div className="home__page">
      <NavBar />
      <PrimaryText />
      <TechStackText />
    </div>
  );
};

export default HomePage;
