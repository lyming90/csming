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
      <span className="upsize">Hi!</span> My name is Liu Mingyu - Liu is my
      surname. Call me Ming if it makes things easier. I am a rising junior at
      Nanyang Technological University with a major in Computer Science and a
      possible minor in Mathematics.
    </p>
    <p>
      Technologies affect the way we live, and can be leveraged to move the
      world forward. Defining myself as a software engineer, my mission is to
      design and create high-quality software solutions that can influence
      people&#39;s lives.
    </p>
    <p>
      Besides my interest in Computer Science, I also enjoy traveling and
      hiking.
    </p>
    {/* <p>
      <span className="upsize">I</span> am a self-driven and curious person who
      always look forward to new adventures and embrace latest technologies. As
      a software developer, I aim to design and create software solutions that
      are high-quality, robust and beautifully-presented. Besides my interest in
      Computer Science, I also enjoy traveling and hiking.
    </p> */}
    <h1>Contact Me</h1>
    <p>
      You&#39;re always welcomed to drop me a message! But, if you&#39;re a
      recruiter, <Link to="/bio">look into here first</Link>.
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
    <p>Contact me to request for an official resume :D.</p>
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
    <p>Currently a junior at Nanyang Technological University, Singapore.</p>
    <p>
      In the past, I went to the University of Waterloo for a term-long
      exchange.
    </p>
    <hr />
    <h1 id="experience">Experience</h1>
    <p>
      Software Engineer Intern<br />
      <span className="small">
        May - Aug 2018<br />Sea (Shopee), Singapore
      </span>
    </p>
    <p>
      Peer Coach<br />
      <span className="small">
        Sept - Nov 2017<br />SCSE-NTU, Singapore
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
      React, Redux, jQuery.
    </p>
    <p>As for tools, I played with Git, LaTeX, Markdown, Firebase, MySQL.</p>
    <hr />
    <h1 id="courses">Courses</h1>
    <p>
      <strong>Courses I&#39;m taking (Fall 2018)</strong>
    </p>
    <p className="lato">
      <span className="monaco">CZ2003</span> - Computer Graphics & Visualization
      <br />
      <span className="monaco">CZ2004</span> - Human Computer Interaction
      <br />
      <span className="monaco">CZ2005</span> - Operating Systems
      <br />
      <span className="monaco">CZ3003</span> - Software Systems Analysis &
      Design
      <br />
      <span className="monaco">CZ3006</span> - Net Centric Computing
      <br />
      <span className="monaco">HY0001</span> - Ethics & Moral Reasoning
    </p>
    <p>
      <strong>Courses I&#39;ve taken</strong>
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

export const vote_en = (
  <div>
    <p>
      I am running for the Academic Executive of Computer Science and
      Engineering Club.
    </p>
    <p>
      I want to let you know that electing me to this position will directly
      make a difference to your life because -{" "}
    </p>
    <p>
      I am proposing to introduce proofreaders in addition to our current search
      for PYP (Past Year Paper) solvers. I am proposing this because I want to
      enhance the overall quality of our PYP solutions.
    </p>
    <p>
      Having been PYP solvers for multiple times I understand how hard it is to
      provide high quality exam solutions months after the end of exams. I have
      more than once noticed errors in our PYP solutions and I myself have
      submitted PYP solutions that I am not proud of.
    </p>
    <p>
      I don't want to see this happen so I'd like to improve the situation. Vote
      for me and we'll enhance the qualify of PYP solutions together, which will
      not just benefit you and me, but thousands of future SCSE students.
    </p>
    <p>
      If you want to know more details about how proofreaders work, here are the{" "}
      <a href="https://goo.gl/wwDSri">presentation slides</a> I used in the
      rally.
    </p>
    <p>
      So cast your vote on September 11th and together we can all excel in
      academics.
    </p>
    <p>Liu Mingyu</p>
  </div>
);

export const vote_cn = (
  <div>
    <p>
      我最近在竞选CSE Club的Academic
      Executive，在9月11日投票之前想让大家知道为什么你的这一票会充满意义。
    </p>
    <p>
      我打算在邀请同学成为solver写PYP答案的同时，也鼓励大家申请当作Proofreader（审核员）来校对写好的答案，以降低PYP答案的错误率，从而提高答案的质量。
    </p>
    <p>
      在过去我为PYP贡献过两次答案，因此我深有体会在考试结束后的数月后写答案是一件多么不容易的事情。在以往用其他人写的答案时我也注意到有些有不少的错误，我自己也曾经提交过并不让我引以为豪的答案。
    </p>
    <p>
      现在，我想改变这个情况。投我一票，我们一起来提高PYP答案的质量。这不但会让你我在未来考试的时候准备更加充分，而且会造福成千上万的未来SCSE学生。
    </p>
    <p>
      如果你对我提出的Proofreader计划有进一步了解的兴趣，可以参考我在竞选演讲上用的<a href="https://goo.gl/wwDSri">
        幻灯片。
      </a>
    </p>
    <p>所以9月11号快来为我投票吧！大家一起拿A+！</p>
    <p>刘明宇</p>
  </div>
);

const statics = {
  home: {
    header: "Home",
    content: home
  },
  resume: {
    header: "Bio",
    content: resume
  },
  projects: {
    header: "Projects",
    content: projects
  },
  vote_en: {
    header: "Why Your Vote Will Affect You",
    content: vote_en
  },
  vote_cn: {
    header: "投我一票，让SCSE PYP更加高质量",
    content: vote_cn
  }
};

export default statics;
