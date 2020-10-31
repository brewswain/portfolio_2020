import React, { useContext, useEffect } from "react";

import "./ProjectDetailsPage.style.scss";

import { NavBar, SideBar } from "../../partials";

import ProjectDetails from "../../data/ProjectDetails.data";

import {
  NavBarContext,
  ProjectContext,
  SelectedProjectContext,
} from "../../contexts";

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
  const { selectedProject } = useContext(ProjectContext);
  const { projectState, setProjectState } = useContext(SelectedProjectContext);

  let filteredProject = ProjectDetails.filter(
    (project) => project.id === projectState
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsHomePage(false);
  }, [setIsHomePage]);

  useEffect(() => {
    setProjectState(selectedProject);
  }, [projectState, selectedProject, setProjectState]);
  return (
    <div className="details__page">
      <NavBar />
      <SideBar />
      {/* <img src="https://placekitten.com/g/1080/1920" alt=""  /> */}
      {/* TODO:   Implement OnBlur as shown below   

onClick={() => {
sideBarContext.setIsVisible(false);
      }} */}
      {projectState ? (
        <>
          <ProjectTitleSection project={filteredProject[0]} />
          <JustificationSection project={filteredProject[0]} />
          <StackSection project={filteredProject[0]} />
          <div className="image__container">
            <img
              className="browser__screenshot
      "
              src={filteredProject[0].homePagePic}
              alt="Single View pic"
            />
          </div>
          <ProblemsSection project={filteredProject[0]} />
          <LessonsSection project={filteredProject[0]} />
          <OtherProjectsSection />
          <ContactSection />{" "}
        </>
      ) : null}
    </div>
  );
};

export default ProjectDetailsPage;
