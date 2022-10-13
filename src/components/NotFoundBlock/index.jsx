import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <section className={styles["not-found"]}>
      <div className="container">
        <div className={styles["not-found__text"]}>404</div>
        <div className="btn-wrap">
          <Link to="/" className="btn btn__return">
            Return
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundBlock;
