import React from "react";
import { Link } from "react-router-dom";

import bannerPng from "../asssets/img/BannerComplete.png";
import bannerWebp from "../asssets/img/BannerComplete.webp";

const Home = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__inner">
          <div className="promo__content">
            <div className="promo__title">
              <b>Find</b> all your favorite <b>character</b>
            </div>
            <div className="promo__text">
              You can find out all the information about your favorite characters
            </div>
            <Link to="characters" className="btn btn__root promo__link">
              See more...
            </Link>
          </div>
          <div className="promo__img">
            <picture>
              <source type="image/webp" srcSet={bannerWebp} />
              <img src={bannerPng} alt="баннер" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
