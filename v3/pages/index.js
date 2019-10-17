import React from "react";
import Layout from "../components/Layout";

const head = (
  <React.Fragment>
    <link rel="canonical" href="https://csming.com" />
    <meta
      name="description"
      content="I respect all ways of living and everyone's life decisions, as
                  long as they are not harmful to others."
    />
  </React.Fragment>
);

const Card = ({ company, position, date, description, image }) => (
  <React.Fragment>
    <div className="container">
      <div className="left">
        <div className="header">
          <span className="company">{company}</span> -{" "}
          <span className="position">{position}</span>
        </div>
        <div className="date">{date}</div>
        <div className="description">{description}</div>
      </div>
      <div className="right">
        <img className="image" src={image} />
      </div>
    </div>
    <style jsx>
      {`
        .container {
          font-family: "Lato", sans-serif;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1em;
          margin-bottom: 1em;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          padding-top: 1rem;
        }
        .container:first-of-type {
          margin-top: 0;
          border-top: 0;
          padding-top: 0;
        }
        .container:last-of-type {
        }
        .right {
          margin-left: 2rem;
        }
        .image {
          height: 4rem;
          width: 4rem;
        }
        .header {
          font-family: "Lora", serif;
        }
        .date {
          color: #2f2f2f;
          font-size: 0.8rem;
        }
        .company {
          font-weight: bold;
        }
        .description {
          font-size: 0.8rem;
        }
      `}
    </style>
  </React.Fragment>
);

export default () => {
  const toggleCollapse = e => {
    const thisNode = e.target;
    const parentNode = thisNode.parentNode;
    const sectionNode = parentNode.childNodes[1];
    if (!sectionNode.style.display || sectionNode.style.display === "none") {
      sectionNode.style.display = "block";
      thisNode.style.backgroundColor = "#cccccc14";
    } else {
      sectionNode.style.display = "none";
      thisNode.style.backgroundColor = null;
    }
  };

  return (
    <Layout title="Me" head={head}>
      <div className="container">
        <div className="container-inner">
          <h1 className="lora">Mingyu Liu (Ming)</h1>
          <div className="intro">
            <div className="intro-text">
              <p>
                Computer Science senior at Nanyang Technological University,
                Singapore.
              </p>
              <p>
                I enjoy working on beautiful{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/liumcse"
                >
                  projects
                </a>{" "}
                of my various interests.
              </p>
            </div>
          </div>
          <div className="belief">
            <p>
              I believe human beings are extremely{" "}
              <span className="rainbow-text">diverse</span>. The diversity of
              humanity blossoms into the colorful world we live in.{" "}
              <span className="lora">
                <i>
                  I respect all ways of living and everyone's life decisions, as
                  long as they are not harmful to others.
                </i>
              </span>
            </p>
            <p>
              I have a{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/mbE8wvZ59Ss"
              >
                YouTube video
              </a>{" "}
              that somehow attracted <strong>1.8 million</strong> views. No idea{" "}
              <em>why</em>, though.
            </p>
          </div>
          <p>
            <i>This page deliberately imitates Wikipedia.</i>
          </p>
          <div className="education">
            <h3 className="header-clickable" onClick={toggleCollapse}>
              Early life and education
            </h3>
            <section className="section-content">
              <p>
                I am attending Nanyang Technological University since August
                2016, with anticipated graduation in mid-2020. In the second
                half of my sophomore year, I went to study abroad at the
                University of Waterloo in Canada.
              </p>
            </section>
          </div>
          <div className="career">
            <h3 className="header-clickable" onClick={toggleCollapse}>
              Career
            </h3>
            <section className="section-content">
              <p>
                During school breaks, I worked for a few companies. Those
                experiences are invaluable to me.
              </p>
              <Card
                company={
                  <span>
                    <span className="google-text">G</span>
                    <span className="google-text">o</span>
                    <span className="google-text">o</span>
                    <span className="google-text">g</span>
                    <span className="google-text">l</span>
                    <span className="google-text">e</span>
                  </span>
                }
                position="Software Engineering Intern"
                date="Jun - Aug 2019"
                description="Empower the next billion users."
                image="/static/assets/logo-google.png"
              />
              <Card
                company="Grab"
                position="Engineering Intern"
                date="Dec 2018 - May 2019"
                description="The leading ride-hailing and mobile payments platform in Southeast Asia."
                image="/static/assets/logo-grab.png"
              />
              <Card
                company="Sea (Shopee)"
                position="Software Engineering Intern"
                date="May - Aug 2018"
                description="Shopee, the leading e-commerce company in Southeast Asia."
                image="/static/assets/logo-sea.png"
              />
            </section>
          </div>
          <div className="activities">
            <h3 className="header-clickable" onClick={toggleCollapse}>
              Activities and community involvements
            </h3>
            <section className="section-content">
              <p>
                Since 2017, I have joined Code in the Community program as a
                teaching assistant for two rounds. The Code in the Community
                aims to bring free coding classes to 3,000 young Singaporeans
                from less well-to-do backgrounds.
              </p>
              <p>
                From May to July 2017, I worked at Yellowstone National Park in
                the United States, where I was part of housekeeping crews to
                deliver customers the best experience.
              </p>
              <p>
                From September to November 2017, I volunteered as a peer coach
                to help my two peers who were then struggling with their
                academic performance. They were eventually lifted out from
                academic probation.
              </p>
              <p>
                In September 2018, I was elected as Academic Executive at
                Computer Science and Engineering Club at the university.
              </p>
            </section>
          </div>
          <div className="personal">
            <h3 className="header-clickable" onClick={toggleCollapse}>
              Personal life
            </h3>
            <section className="section-content">
              <p>Despite computer science, I have a wide variety of hobbies.</p>
              <h4>Reading</h4>
              <p>
                I love reading a wide range of books. I am particularly
                interested in novels. You can see books I've read or am reading
                at{" "}
                <a
                  href="https://goodreads.com/user/show/57560338-mingyu-liu"
                  rel="noopener noreferrer"
                >
                  Goodreads
                </a>
                .
              </p>
              <h4>Hiking</h4>
              <p>
                One of the best things you can do on this planet. So far, I have
                hiked in places of the US, China, and Thailand. In January 2019,
                a friend and I hitchhiked the entire journey and camped at Khao
                Yai National Park for three days knowing no Thai.
              </p>
              And many more.
              <p />
            </section>
          </div>
          <div className="contact">
            <h3 className="header-clickable" onClick={toggleCollapse}>
              Contact me
            </h3>
            <section className="section-content">
              <p>
                For general communication, contact{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:liumcse@gmail.com"
                >
                  liumcse@gmail.com
                </a>
                .
              </p>
              <p>
                For school-related communication, contact{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:lium0029@e.ntu.edu.sg"
                >
                  lium0029@e.ntu.edu.sg
                </a>
                .
              </p>
              <p>
                For professional purpose, download my{" "}
                <a
                  href="https://drive.google.com/file/d/1XNO2MC0L7AIkGGZ6Yz1yPtnQ0FITyNGp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé (A4)
                </a>
                .
              </p>
              <p>
                To send me a quick message, find me on{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com/mingyuliu_16/"
                >
                  Instagram
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/mingyuliu16/"
                >
                  LinkedIn
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          font-family: "Lato", sans-serif;
        }
        .rainbow-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: -webkit-gradient(
            linear,
            left top,
            right bottom,
            color-stop(0, red),
            color-stop(16%, orange),
            color-stop(48%, green),
            color-stop(60%, blue),
            color-stop(76%, indigo),
            color-stop(1, violet)
          );
        }
        .lora {
          font-family: "Lora", serif;
        }
        .google-text:nth-child(1) {
          color: #4285f4;
        }
        .google-text:nth-child(2) {
          color: #db4437;
        }
        .google-text:nth-child(3) {
          color: #f4b400;
        }
        .google-text:nth-child(4) {
          color: #4285f4;
        }
        .google-text:nth-child(5) {
          color: #0f9d58;
        }
        .google-text:nth-child(6) {
          color: #db4437;
        }
        .container-inner {
          margin: 0 auto;
          max-width: 960px;
          padding: 0 1rem;
          line-height: 1.5;
        }
        .belief:first-child::first-letter {
          font-size: 2.5rem;
        }
        .intro {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .display-picture-container {
          position: relative;
          margin-left: -4rem;
          padding: 2rem;
          padding-top: 0;
        }
        .display-picture {
          display: block;
          /* border-radius: 8rem; */
          /* border: 1px solid lightblue; */
          /* width: 8rem; */
          height: 8rem;
          cursor: pointer;
        }
        a {
          color: #00a699;
          text-decoration: none;
        }
        a:hover {
          color: #007970;
          text-decoration: underline;
        }
        p {
          margin-top: 0;
        }
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-bottom: 0.25rem;
          font-family: "Lora", serif;
        }
        .header-clickable {
          cursor: pointer;
          padding: 1rem;
          // margin-bottom: 0.5rem;
          margin: 0;
          display: flex;
          align-items: center;
        }
        .header-clickable:hover {
          background-color: #cccccc14;
          border-radius: 3px;
        }
        .section-content {
          display: none;
          // border-top: 1px dashed #a2a9b1;
          // border-left: 1px dashed #a2a9b1;
          // border-right: 1px dashed #a2a9b1;
          padding: 1rem;
          padding-bottom: 0;
        }
      `}</style>
    </Layout>
  );
};
