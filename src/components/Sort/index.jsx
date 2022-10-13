import React from "react";
import styles from "./Sort.module.scss";

const Sort = () => {
  return (
    <div className={styles.sort}>
      <div className={styles["sort__label"]}>
        <p>color eye</p>
        <span>All</span>
      </div>
      <div className={styles["sort__popup"]}>
        <ul>
          <li className="">All</li>
          <li className="">brown</li>
          <li className="">red</li>
          <li className="">blue</li>
          <li className="">white</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
