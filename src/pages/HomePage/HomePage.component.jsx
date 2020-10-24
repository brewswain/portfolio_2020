import React from "react";

import "./HomePage.style.scss";

import {
  AboutSection,
  ContactSection,
  LandingPageSection,
  ProjectSection,
} from "../../sections/";

const HomePage = () => {
  return (
    <div className="home__page">
      <LandingPageSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
