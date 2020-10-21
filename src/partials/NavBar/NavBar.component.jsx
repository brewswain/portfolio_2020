import React from "react";

import "./NavBar.style.scss";

import { Link } from "react-router-dom";
import { Logo } from "../../assets";

const NavBar = () => (
  <div className="navbar__container">
    <div className="navbar__wrapper">
      <Logo className="navbar__logo" />
      <div className="navbar__links">
        <Link className="navbar__link" to="#projects">
          Projects
        </Link>
        <Link className="navbar__link" to="#about">
          About
        </Link>
        <Link className="navbar__link" to="#contact">
          Contact
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
