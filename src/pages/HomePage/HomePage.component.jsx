import React, { useEffect } from "react";

import "./HomePage.style.scss";

import {
  AboutSection,
  ContactSection,
  LandingPageSection,
  ProjectSection,
} from "../../sections/";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
