import React from "react";
import { NavLink } from "react-router-dom";

import logoSvg from "../asssets/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <NavLink exact={true} to="/">
            <div className="header__logo">
              <img src={logoSvg} alt="star wars" />
            </div>
          </NavLink>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <NavLink exact={true} to="/" className="header__link">
                  Home
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to="characters" className="header__link">
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
