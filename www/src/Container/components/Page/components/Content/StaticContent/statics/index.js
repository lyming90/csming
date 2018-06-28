import React from "react";
import { Link } from "react-router-dom";

export const home = (
  <div>
    <p className="upsize">
      Hi! My name is 刘明宇 (Liu Mingyu - in which Liu is my surname). I am a
      rising junior at Nanyang Technological University with a major in Computer
      Science and a possible minor in Mathematics.
    </p>
    <p className="upsize">
      I am a self-driven and curious person who always look forward to new
      adventures and embrace latest technologies. I aim to design and create
      software solutions that are high-quality, robust and
      beautifully-presented. Besides my interest in Computer Science, I also
      enjoy traveling and hiking.
    </p>
  </div>
);

export const resume = (
  <div>
    <p className="upsize">
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
    <line-break />
    <h1 id="education">Education</h1>
    <p>
      Currently a rising junior at Nanyang Technological University, Singapore.
    </p>
    <p>In the past, I went to the University of Waterloo for one term.</p>
    <line-break />
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
    <line-break />
    <h1 id="skill-set">Skill Set</h1>
    <p>
      For programming languages, I know Java, Python, C, SQL, HTML, CSS,
      JavaScript.
    </p>
    <p>
      For frameworks and libraries, I have used JavaFX, Python-Flask, OpenCV,
      Nginx, Gunicorn, ReactJS, Redux, jQuery.
    </p>
    <p>As for tools, I played with Git, LaTeX, Markdown, Firebase, MySQL.</p>
    <line-break />
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

export const contact = (
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
  contact: {
    header: "Contact",
    content: contact
  }
};

export default statics;
