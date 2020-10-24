import React, { useContext, useState } from "react";

import "./SideBar.style.scss";

import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

import { Slide } from "../../components";
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
    <Slide visible={isVisible}>
      <div className="sidebar__container">
        <div className="sidebar__element">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="sidebar__link">Home</div>
            <HomeIcon className="sidebar__icon hover__purple" />
          </Link>
        </div>
        <div className="sidebar__element">
          <ScrollLink
            to="top"
            smooth
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <div className="sidebar__link">Back to top</div>
            <ArrowIcon className="sidebar__icon hover__blue" />
          </ScrollLink>
        </div>
        <div className="sidebar__element">
          <ScrollLink
            to="justification"
            smooth
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <div className="sidebar__link">Justification</div>
            <PieChartIcon className="sidebar__icon hover__green" />
          </ScrollLink>
        </div>
        <div className="sidebar__element">
          <ScrollLink
            to="problems"
            smooth
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <div className="sidebar__link">Problems</div>
            <BookIcon className="sidebar__icon hover__yellow" />
          </ScrollLink>
        </div>
        <div
          className="sidebar__element"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          <ScrollLink to="lessons" smooth>
            <div className="sidebar__link">Lessons</div>
            <HatIcon className="sidebar__icon hover__orange" />
          </ScrollLink>
        </div>
        <div
          className="sidebar__element"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          <ScrollLink
            to="contact"
            smooth
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <div className="sidebar__link">Contact</div>
            <PhoneIcon className="sidebar__icon hover__red" />
          </ScrollLink>
        </div>
      </div>
    </Slide>
  );
};

export default SideBar;
