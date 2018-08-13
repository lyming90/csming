import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./style.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.element}>MING</div>
      </Link>
      <Link to="/bio">
        <div className={styles.element}>BIO</div>
      </Link>
      <Link to="/blog">
        <div className={styles.element}>BLOG</div>
      </Link>
      <Link to="/projects">
        <div className={styles.element}>PROJECTS</div>
      </Link>
    </div>
  );
};

export default NavBar;
