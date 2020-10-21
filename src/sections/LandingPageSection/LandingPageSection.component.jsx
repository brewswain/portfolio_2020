import React from "react";

import "./LandingPageSection.style.scss";

import { NavBar } from "../../partials";
import { PrimaryText, TechStackText } from "../../components";

const LandingPageSection = () => (
  <section className="section__home" id="home">
    <NavBar />
    <PrimaryText />
    <TechStackText />
  </section>
);

export default LandingPageSection;
