import React from "react";

import styles from "./HeroesItem.module.scss";

const HeroesItem = ({ name, height, mass, gender, birth_year }) => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero__item"]}>
        <div className={styles["hero__title"]}>{name}</div>
        <div className={styles["hero__attributes"]}>
          <div className={styles["hero__attribut"]}>
            <div className={styles["hero__number"]}>{height}</div>
            <div className={styles["hero__name"]}>height</div>
          </div>
          <div className={styles["hero__attribut"]}>
            <div className={styles["hero__number"]}>{mass}</div>
            <div className={styles["hero__name"]}>mass</div>
          </div>
        </div>

        <div className={styles["hero__grade-wrap"]}>
          <div className={`${styles["hero__grade"]} ${styles._male}`}>{gender}</div>
          <div className={`${styles["hero__grade"]} ${styles._19BBY}`}>{birth_year}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroesItem;
