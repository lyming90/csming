import React from "react";

import * as styles from "./style.scss";
import Bubble from "../components/Bubble";

import fb from "src/assets/facebook.svg";
import linkedin from "src/assets/linkedin.svg";
import medium from "src/assets/medium.svg";
import email from "src/assets/email.svg";

const PageHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>M</div>
      <div className={styles.section_a}>
        Hey! My name is Liu Mingyu - Liu is my surname. Call me{" "}
        <span className={styles.name}>Ming</span> if it makes things easier. I
        am a rising junior at{" "}
        <span className={styles.uni}>Nanyang Technological University</span>{" "}
        with a major in Computer Science and a possible minor in Mathematics.
      </div>
      <div className={styles.section_b}>
        I belive technolgoies can impact the way we live and those with computer
        science skills have the capability of making it better.
      </div>
      <div className={styles.section_c}>
        Defining myself as a software engineer, my mission is to design and
        create <span className={styles.highlight}>high-quality</span> software
        solutions that can{" "}
        <span className={styles.highlight}>influence people&#39;s lives</span>.
      </div>
      <div className={styles.header}>GET IN TOUCH</div>
      <div className={styles.socialMedia}>
        <Bubble alt="Facebook" img={fb} link="#" />

        <Bubble alt="Medium" img={medium} link="#" />

        <Bubble alt="LinkedIn" img={linkedin} link="#" />

        <Bubble alt="E-Mail" img={email} link="#" />
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_text}>
          &copy; 2018 Ming &middot; This website is open source
        </div>
      </div>
    </div>
  );
};

export default PageHome;
