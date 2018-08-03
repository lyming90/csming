import React from "react";
import * as styles from "./style.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <a href="#">
        <div className={styles.element}>MING</div>
      </a>
      <a href="#">
        <div className={styles.element}>BIO</div>
      </a>
      <a href="#">
        <div className={styles.element}>BLOG</div>
      </a>
      <a href="#">
        <div className={styles.element}>PROJECTS</div>
      </a>
    </div>
  );
};

export default NavBar;
