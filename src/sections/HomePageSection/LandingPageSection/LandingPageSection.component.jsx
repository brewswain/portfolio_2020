import React, { useContext, useEffect } from "react";

import "./LandingPageSection.style.scss";

import { NavBar } from "../../../partials";
import { PrimaryText, TechStackText } from "../../../components";
import { NavBarContext } from "../../../contexts";

const LandingPageSection = () => {
  const { setIsHomePage } = useContext(NavBarContext);

  useEffect(() => {
    setIsHomePage(true);
  }, []);

  return (
    <section className="section__home" id="home">
      <NavBar />
      <PrimaryText />
      <TechStackText />
    </section>
  );
};

export default LandingPageSection;
