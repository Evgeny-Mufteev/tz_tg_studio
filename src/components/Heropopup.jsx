import React from "react";

import male from "../asssets/img/gender-male.svg";
import female from "../asssets/img/gender-female.svg";
import getero from "../asssets/img/gender-getero.svg";

const Heropopup = () => {
  return (
    <div className="hero-popup">
      <div className="hero-popup__inner">
        <div className="hero-popup__gender">
          <div className="hero-popup__img">
            <img src={getero} alt="" />
          </div>
          <div className="heroes__grade-wrap">
            <div className="heroes__grade _male">male</div>
            <div className="heroes__grade _19BBY">19BBY</div>
          </div>
        </div>
        <div className="hero-popup__info">
          <div className="hero-popup__title">Jabba Desilijic Tiure</div>
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
        <div className="hero-popup__close"></div>
      </div>
    </div>
  );
};

export default Heropopup;
