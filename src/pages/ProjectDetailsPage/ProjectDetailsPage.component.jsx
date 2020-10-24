import React, { useContext, useEffect } from "react";

import "./ProjectDetailsPage.style.scss";

import { NavBar, SideBar } from "../../partials";

import { NavBarContext, SideBarContext } from "../../contexts";

import {
  ContactSection,
  JustificationSection,
  LessonsSection,
  OtherProjectsSection,
  ProblemsSection,
  ProjectTitleSection,
  StackSection,
} from "../../sections";

const ProjectDetailsPage = () => {
  const { setIsHomePage } = useContext(NavBarContext);
  const sideBarContext = useContext(SideBarContext);

  useEffect(() => {
    setIsHomePage(false);
  }, []);
  return (
    <div className="details__page">
      <NavBar />
      <SideBar />
      {/* <img src="https://placekitten.com/g/1080/1920" alt=""  /> */}
      {/* TODO:   Implement OnBlur as shown below   

onClick={() => {
sideBarContext.setIsVisible(false);
      }} */}
      <ProjectTitleSection />
      <JustificationSection />
      <StackSection />
      <div className="image__container">
        <img
          className="browser__screenshot
      "
          src="https://placekitten.com/g/1920/1080"
          alt="Single View pic"
        />
      </div>

      <ProblemsSection />
      <LessonsSection />
      <OtherProjectsSection />
      <ContactSection />
    </div>
  );
};

export default ProjectDetailsPage;
