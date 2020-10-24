import React, { useContext } from "react";

import "./NavBar.style.scss";

import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

import { Logo, Menu } from "../../assets";
import { NavBarContext, SideBarContext } from "../../contexts";

const NavBar = () => {
  const { isHomePage } = useContext(NavBarContext);
  const sideBarContext = useContext(SideBarContext);
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <Link to="/">
          <Logo className="navbar__logo" />
        </Link>
        {isHomePage ? (
          <div className="navbar__links">
            <ScrollLink className="navbar__link" to="projects" smooth>
              Projects
            </ScrollLink>
            <ScrollLink className="navbar__link" to="contact" smooth>
              Contact
            </ScrollLink>
          </div>
        ) : (
          <div className="navbar__menu">
            <Menu
              className="menu__logo"
              onClick={() => {
                sideBarContext.setIsVisible(!sideBarContext.isVisible);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
