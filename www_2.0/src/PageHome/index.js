import React from "react";

import * as styles from "./style.scss";
import Bubble from "../components/Bubble";

import fb from "src/assets/facebook.svg";
import linkedin from "src/assets/linkedin.svg";
import medium from "src/assets/medium.svg";
import email from "src/assets/email.svg";
import Banner from "src/components/Banner";
import Header from "src/components/Header";

const facebookIcon = <i className="fab fa-facebook-square fa-2x" />;
const mediumIcon = <i className="fab fa-medium fa-2x" />;
const linkedinIcon = <i className="fab fa-linkedin fa-2x" />;
const instagramIcon = <i className="fab fa-instagram fa-2x" />;

const PageHome = () => {
  return (
    <div className={styles.container}>
      <Banner text="Hi, thanks for visiting!" />
      <Header text="Home" />
      <div className={styles.section_a}>
        Hey! My name is Liu Mingyu - Liu is my surname. Call me{" "}
        <span className={styles.name}>Ming</span> if it makes things easier. I
        am a rising junior at{" "}
        <span className={styles.uni}>Nanyang Technological University</span>{" "}
        with a major in Computer Science and a possible minor in Mathematics.
      </div>
      <div className={styles.section_b}>
        I believe technologies can impact the way we live and those with
        computer science skills have the capability of making it better.
      </div>
      <div className={styles.section_c}>
        Defining myself as a software engineer, my mission is to design and
        create <span className={styles.highlight}>high-quality</span> software
        solutions that can{" "}
        <span className={styles.highlight}>influence people&#39;s lives</span>.
      </div>
      <div className={styles.getInTouch}>Get in touch</div>
      <div className={styles.socialMedia}>
        <a
          href="https://www.facebook.com/mingyuliu1916"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.facebook}>{facebookIcon}</span>
        </a>
        <a
          href="https://medium.com/@mingyuliu_64884"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.medium}>{mediumIcon}</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mingyuliu16/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.linkedin}>{linkedinIcon}</span>
        </a>
        <a
          href="https://www.instagram.com/mingyuliu_16/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.instagram}>{instagramIcon}</span>
        </a>
      </div>
    </div>
  );
};

export default PageHome;
