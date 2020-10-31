import React, { useContext } from "react";

import "./SideBar.style.scss";

import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

import { Fade } from "../../components";
import { SideBarContext } from "../../contexts";
import {
  ArrowIcon,
  BookIcon,
  HatIcon,
  HomeIcon,
  PhoneIcon,
  PieChartIcon,
} from "../../assets";

const SideBar = () => {
  const { isVisible, setIsVisible } = useContext(SideBarContext);

  return (
    <Fade visible={isVisible}>
      <div
        className="sidebar__page__modal"
        onClick={() => {
          setIsVisible(false);
        }}
      >
        <div className="sidebar__container">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="sidebar__element"
          >
            <div className="sidebar__link">Home</div>
            <HomeIcon className="sidebar__icon hover__purple" />
          </Link>
          <ScrollLink
            to="top"
            smooth
            className="sidebar__element"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <div className="sidebar__link">Back to top</div>
            <ArrowIcon className="sidebar__icon hover__blue" />
          </ScrollLink>
          <ScrollLink
            to="justification"
            smooth
            className="sidebar__element"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <div className="sidebar__link">Justification</div>
            <PieChartIcon className="sidebar__icon hover__green" />
          </ScrollLink>
          <ScrollLink
            to="problems"
            smooth
            className="sidebar__element"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <div className="sidebar__link">Problems</div>
            <BookIcon className="sidebar__icon hover__yellow" />
          </ScrollLink>
          <ScrollLink
            to="lessons"
            className="sidebar__element"
            smooth
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <div className="sidebar__link">Lessons</div>
            <HatIcon className="sidebar__icon hover__orange" />
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            onClick={() => {
              setIsVisible(false);
            }}
            className="sidebar__element"
          >
            <div className="sidebar__link">Contact</div>
            <PhoneIcon className="sidebar__icon hover__red" />
          </ScrollLink>
        </div>
      </div>
    </Fade>
  );
};

export default SideBar;
