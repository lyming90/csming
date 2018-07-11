import React from "react";
import { Link } from "react-router-dom";
import * as ntuLogo from "../../../../../../../assets/ntu_logo.png";
import * as uwaterlooLogo from "../../../../../../../assets/uwaterloo_logo.png";

const facebookIcon = (
  <i className="fab fa-facebook-square fa-2x" style={{ marginRight: "2rem" }} />
);
const linkedinIcon = (
  <i className="fab fa-linkedin fa-2x" style={{ marginRight: "2rem" }} />
);
const instagramIcon = (
  <i className="fab fa-instagram fa-2x" style={{ marginRight: "2rem" }} />
);

export const home = (
  <div>
    <p>
      <img src="/static/old-faithful-1-min.jpg" alt="Old Faithful" />
      <span
        style={{
          color: "var(--primary)",
          fontSize: "90%"
        }}
      >
        Old faithful Geyser, Yellowstone National Park | Feb, 2018
      </span>
    </p>
    <p>
      <span className="upsize">Hi!</span> My name is 刘明宇 (Liu Mingyu - Liu is
      my surname). Call me Ming if it makes things easier. I am a rising junior
      at Nanyang Technological University with a major in Computer Science and a
      possible minor in Mathematics.
    </p>
    <p>
      <span className="upsize">I</span> am a self-driven and curious person who
      always look forward to new adventures and embrace latest technologies. As
      a software developer, I aim to design and create software solutions that
      are high-quality, robust and beautifully-presented. Besides my interest in
      Computer Science, I also enjoy traveling and hiking.
    </p>
    <h1>Contact Me</h1>
    <p>
      You're always welcomed to drop me a message! But, if you're a recruiter,{" "}
      <Link to="/resume">look into here first</Link>.
    </p>
    <p>Me on social media:</p>
    <p className="disable-select">
      <a
        href="https://www.facebook.com/mingyuliu1916"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#3b5998", borderBottom: "none" }}
      >
        {facebookIcon}
      </a>
      <a
        href="https://www.linkedin.com/in/mingyuliu16/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0077B5", borderBottom: "none" }}
      >
        {linkedinIcon}
      </a>
      <a
        href="https://www.instagram.com/mingyuliu_16/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fb3958", borderBottom: "none" }}
      >
        {instagramIcon}
      </a>
    </p>
    <p>
      Or send me an Email at{" "}
      <a href="mailto:lyming90@gmail.com">lyming90@gmail.com</a>.
    </p>
  </div>
);

export const resume = (
  <div>
    <p>
      Contact me to request for an <Link to="/">official resume</Link>.
    </p>
    <div className="table-of-contents">
      <h2>Table of Contents</h2>
      <p>
        <a href="#education">1. Education</a>
        <br />
        <a href="#experience">2. Experience</a>
        <br />
        <a href="#skill-set">3. Skill Set</a>
        <br />
        <a href="#courses">4. Courses</a>
      </p>
    </div>
    <hr />
    <h1 id="education">Education</h1>
    <p>
      <img
        style={{ height: "7.5rem" }}
        alt="Nanyang Technological University"
        src={ntuLogo}
      />
      <img
        style={{ height: "7.5rem" }}
        alt="University of Waterloo"
        src={uwaterlooLogo}
      />
    </p>
    <p>
      Currently a rising junior at Nanyang Technological University, Singapore.
    </p>
    <p>
      In the past, I went to the University of Waterloo for a term-long
      exchange.
    </p>
    <hr />
    <h1 id="experience">Experience</h1>
    <p>
      Software Engineer Intern<br />
      <span className="small">
        May 2018 - Present<br />Sea (Shopee), Singapore
      </span>
    </p>
    <p>
      Peer Coach<br />
      <span className="small">
        Sept - Nov 2018<br />SCSE-NTU, Singapore
      </span>
    </p>
    <p>
      Teaching Assistant<br />
      <span className="small">
        Feb - Apr 2017<br />Saturday Kids, Singapore
      </span>
    </p>
    <hr />
    <h1 id="skill-set">Skill Set</h1>
    <p>
      For programming languages, I know Java, Python, C, SQL, HTML, CSS,
      JavaScript.
    </p>
    <p>
      For frameworks and libraries, I have used JavaFX, Python-Flask, OpenCV,
      Nginx, Gunicorn, React, Redux, jQuery.
    </p>
    <p>As for tools, I played with Git, LaTeX, Markdown, Firebase, MySQL.</p>
    <hr />
    <h1 id="courses">Courses</h1>
    <p>
      <strong>Courses I've taken</strong>
    </p>
    <h4>Winter 2018 (University of Waterloo)</h4>
    <p className="lato">
      <span className="monaco">CS430</span> - Application Software Engineering
      <br />
      <span className="monaco">ECE222</span> - Digital Computers
      <br />
      <span className="monaco">ECE351</span> - Compilers
      <br />
      <span className="monaco">ECE406</span> - Algorithm Design and Analysis
      <br />
      <span className="monaco">EMLS129R</span> - Written Academic English
      <br />
      <span className="monaco">MATH136</span> - Linear Algebra 1 for Honors
      Mathematics
    </p>
    <h4>Fall 2017 (switched major to Computer Science)</h4>
    <p className="lato">
      <span className="monaco">CZ1005</span> - Digital Logic
      <br />
      <span className="monaco">CZ2001</span> - Algorithms
      <br />
      <span className="monaco">CZ2002</span> - Object Oriented Design &
      Programming
      <br />
      <span className="monaco">CZ2006</span> - Software Engineering
      <br />
      <span className="monaco">CZ2007</span> - Introduction to Databases
      <br />
      <span className="monaco">PH1005</span> - Optics, Vibrations & Waves
    </p>
    <h4>Spring 2017</h4>
    <p className="lato">
      <span className="monaco">CZ1007</span> - Data Structures
      <br />
      <span className="monaco">CZ1011</span> - Engineering Mathematics I
      <br />
      <span className="monaco">CZ1012</span> - Engineering Mathematics II
      <br />
      <span className="monaco">EE2008</span> - Data Structures & Algorithms (for
      Electrical Engineering)
      <br />
      <span className="monaco">EE8084</span> - Cyber Security
      <br />
      <span className="monaco">MH1812</span> - Discrete Mathematics
    </p>
    <h4>Fall 2016</h4>
    <p className="lato">
      <span className="monaco">CZ1003</span> - Introduction to Computational
      Thinking
      <br />
      <span className="monaco">FE1008</span> - Computing (for Electrical
      Engineering)
      <br />
      <span className="monaco">FE1073</span> - An Introduction to Engineering
      and Practices
      <br />
      <span className="monaco">HE9091</span> - Principle of Economics
      <br />
      <span className="monaco">HW0188</span> - Engineering Communication I
      <br />
      <span className="monaco">MH1810</span> - Mathematics I (for Electrical
      Engineering)
      <br />
      <span className="monaco">PH1011</span> - Physics (for Electrical
      Engineering)
    </p>
  </div>
);

export const projects = (
  <div>
    <p>To be added</p>
  </div>
);

const statics = {
  home: {
    header: "Home",
    content: home
  },
  resume: {
    header: "Resume",
    content: resume
  },
  projects: {
    header: "Projects",
    content: projects
  }
};

export default statics;
