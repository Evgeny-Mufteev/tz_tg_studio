import React from "react";

import styles from "./HeroesItem.module.scss";

const HeroesItem = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero__item"]}>
        <div className={styles["hero__title"]}>Chewbacca</div>
        <div className={styles["hero__attributes"]}>
          <div className={styles["hero__attribut"]}>
            <div className={styles["hero__number"]}>172</div>
            <div className={styles["hero__name"]}>height</div>
          </div>
          <div className={styles["hero__attribut"]}>
            <div className={styles["hero__number"]}>77</div>
            <div className={styles["hero__name"]}>height</div>
          </div>
        </div>

        <div className={styles["hero__grade-wrap"]}>
          <div className={`${styles["hero__grade"]} ${styles._male}`}>male</div>
          <div className={`${styles["hero__grade"]} ${styles._19BBY}`}>19BBY</div>
        </div>
      </div>
    </div>
  );
};

export default HeroesItem;
