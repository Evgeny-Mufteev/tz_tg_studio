import React from "react";

import male from "../asssets/img/gender-male.svg";
import female from "../asssets/img/gender-female.svg";
import getero from "../asssets/img/gender-getero.svg";

const Heropopup = ({ heroes, onClose }) => {
  const { name, gender, birth_year } = heroes;
  return (
    <>
      <div className={`hero-popup`}>
        <div className="hero-popup__inner">
          <div className="hero-popup__gender">
            <div className="hero-popup__img">
              <img src={getero} alt="" />
            </div>
            <div className="heroes__grade-wrap">
              <div className="heroes__grade _male">{gender}</div>
              <div className="heroes__grade _19BBY">{birth_year}</div>
            </div>
          </div>
          <div className="hero-popup__info">
            <div className="hero-popup__title">{name}</div>
            <div className="hero-popup__setting">
              <p>
                hair color: <span>brown</span>
              </p>
              <p>
                skin color: <span>white</span>
              </p>
              <p>
                hair color: <span>brown</span>
              </p>
            </div>
            <div className="heroes__attributes">
              <div className="heroes__attribut">
                <div className="heroes__number">172</div>
                <div className="heroes__name">height</div>
              </div>
              <div className="heroes__attribut">
                <div className="heroes__number">77</div>
                <div className="heroes__name">height</div>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="hero-popup__close"></button>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Heropopup;
