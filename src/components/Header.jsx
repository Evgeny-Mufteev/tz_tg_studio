import React from "react";
import { NavLink } from "react-router-dom";

import logoSvg from "../asssets/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <NavLink to="/">
            <div className="header__logo">
              <img src={logoSvg} alt="star wars" />
            </div>
          </NavLink>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <NavLink to="/" className="header__link" end>
                  Home
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to="characters" className="header__link" end>
                  Characters
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
