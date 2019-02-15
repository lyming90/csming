import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const Card = props => (
  <React.Fragment>
    <div className="container">
      <div className="left">
        <div className="header">
          <span className="company">{props.company}</span> -{" "}
          <span className="position">{props.position}</span>
        </div>
        <div className="date">{props.date}</div>
        <div className="description">{props.description}</div>
      </div>
      <div className="right">
        <img className="image" src={props.image} />
      </div>
    </div>
    <style jsx>
      {`
        .container {
          font-family: "Lato", sans-serif;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-block-start: 1em;
          margin-block-end: 1em;
        }
        .container:first-of-type {
          margin-block-start: 0;
        }
        .container:last-of-type {
          margin-block-end: 0;
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
          font-size: 80%;
        }
        .company {
          font-weight: bold;
        }
        .description {
          font-size: 80%;
        }
      `}
    </style>
  </React.Fragment>
);

export default () => (
  <Layout>
    <div className="container">
      <div className="container-inner">
        <h1 className="lora">Mingyu Liu (Ming)</h1>
        <div className="belief">
          <p>
            I believe human beings are extremely{" "}
            <span className="rainbow-text">diverse</span>. I don't believe there
            is the norm of life, nor do I agree on traditional societal
            expectations.{" "}
            <span className="lora">
              <i>I respect all ways of living and everyone's life decisions.</i>
            </span>
          </p>
        </div>
        <div className="intro">
          <div className="display-picture-container">
            <Link href="/">
              <img
                className="display-picture"
                src="static/assets/dp-cropped.png"
              />
            </Link>
          </div>
          <div className="intro-text">
            <p>
              A Computer Science junior at Nanyang Technological University in
              Singapore. I enjoy working on beautiful projects of my diverse
              interests.
            </p>
          </div>
        </div>
        <i>This page deliberately imitates Wikipedia.</i>
        <div className="education">
          <h3>
            Early life and education <span className="toggle">Show</span>
          </h3>
          <p>
            I am attending Nanyang Technological University since August 2016,
            with anticipated graduation in mid-2020. In the second half of my
            sophomore year, I went to study abroad at the University of Waterloo
            in Canada.
          </p>
        </div>
        <div className="career">
          <h3>Career</h3>
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
            image="https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_400_400/0?e=1557964800&v=beta&t=L35e81-bOeAwoxD9mWzFDyFQH7iH5PE8sxb6wgczoRs"
          />
          <Card
            company="Grab"
            position="Information Security Engineering Intern"
            date="Dec 2018 - May 2019"
            description="The leading ride-hailing and mobile payments platform in Southeast Asia."
            image="https://media.licdn.com/dms/image/C4E0BAQGMv0-OtFdbYw/company-logo_400_400/0?e=1557964800&v=beta&t=8gxQW1C9OSdvb-xuPIb4BKzJq3XrOSO7OPs9v5-FnDs"
          />
          <Card
            company="Sea"
            position="Software Engineering Intern"
            date="May - Aug 2018"
            description="Shopee, the leading e-commerce company in Southeast Asia."
            image="https://media.licdn.com/dms/image/C560BAQEAIrDkWI_p6g/company-logo_400_400/0?e=1557964800&v=beta&t=mTPLdSuxFQA2mBFXfzpf38P4pnqhnW-z92fzXf2uoUQ"
          />
        </div>
        <div className="activities">
          <h3>Activities and community involvements</h3>
          <p>
            Since 2017, I have joined Code in the Community program as a
            teaching assistant for two rounds. The Code in the Community aims to
            bring free coding classes to 3,000 young Singaporeans from less
            well-to-do backgrounds.
          </p>
          <p>
            From May to July 2017, I worked at Yellowstone National Park in the
            United States, where I was part of housekeeping crews to deliver
            customers the best experience.
          </p>
          <p>
            From September to November 2017, I volunteered as a peer coach to
            provide help to two of my peers who were then struggling with their
            academic performance. They eventually lifted themselves out from
            academic probation.
          </p>
          <p>
            In September 2018, I was elected as Academic Executive at Computer
            Science and Engineering Club at the university.
          </p>
        </div>
        <div className="personal">
          <h3>Personal life</h3>
          <p>I enjoy many more things despite computer science.</p>
          <h4>Reading</h4>
          <p>
            I love reading a wide range of books. However, I am particularly
            interested in novels. You can see books I've read or am reading at{" "}
            <a href="https://www.goodreads.com/user/show/57560338-mingyu-liu">
              Goodreads
            </a>
            .
          </p>
          <h4>Hiking</h4>
          <p>
            One of the best things you can do on this planet. So far, I have
            hiked in places of the US, China, and Thailand. In January 2019, a
            friend and I hitchhiked the entire journey and camped at Khao Yai
            National Park for three days knowing no Thai.
          </p>
          <h4>And many more.</h4>
        </div>
        {/* <div className="belief">
          <h3>What I believe</h3>
          <p>
            I believe human beings are extremely diverse. I don't believe there
            is the norm of life, nor do I agree on traditional societal
            expectations.
          </p>
          <p>
            I respect all ways of living. I respect everyone's life
            decisions.
          </p>
        </div> */}
        <div className="contact">
          <h3>Contact me</h3>
          <p>
            For professional purpose, download my <a href="#">Résumé</a>.
            <br />
            To send me a quick message, find me on <a href="#">
              Instagram
            </a> and <a href="#">LinkedIn</a>.
            <br />
            For formal communication, contact{" "}
            <a href="mailto:liumcse@gmail.com">liumcse@gmail.com</a>.
          </p>
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
      .toggle {
        font-size: 12px;
        margin-left: 1rem;
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
      .intro-text > p {
        margin-block-start: 1em;
      }
      p {
        margin-block-start: 0;
      }
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-block-end: 0.25rem;
        font-family: "Lora", serif;
      }
      h3 {
        border-bottom: 1px dashed #a2a9b1;
        margin-bottom: 0.5rem;
      }
    `}</style>
  </Layout>
);
