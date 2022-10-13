import React from "react";
import { Link } from "react-router-dom";

import logoSvg from "../asssets/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/">
            <div className="header__logo">
              <img src={logoSvg} alt="star wars" />
            </div>
          </Link>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <Link to="/" className="header__link active">
                  Home
                </Link>
              </li>
              <li className="header__item">
                <Link to="characters" className="header__link">
                  Characters
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
