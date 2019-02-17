import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout hideFooter hideNavbar>
    <div className="container">
      <div className="container-inner">
        <div className="section-upper">
          <div className="section-upper-left">
            <img className="image" src="static/assets/dp-cropped.png" />
          </div>
          <div className="section-upper-right">
            <div className="header">
              <span className="large">B</span>
              <span className="big">uild</span>
              <br />
              for great purposes.
            </div>
          </div>
        </div>
        <div className="section-lower">
          <div>Mingyu Liu. College junior.</div>
          <div>
            Read my{" "}
            <Link href="/blog">
              <a>blog</a>
            </Link>
            , or read{" "}
            <Link href="/about">
              <a>about me</a>
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        min-height: 100vh;
        display: flex;
        align-items: center;
      }
      .container-inner {
        max-width: 960px;
        margin: auto;
        padding: 2rem;
      }
      .section-upper {
        display: flex;
        flex-direction: row;
        margin-top: -5rem;
      }
      .section-upper-left {
        flex: 1;
        margin-right: 4rem;
        max-width: 480px;
        align-self: center;
      }
      .image {
        width: 100%;
        display: block;
      }
      .section-upper-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .section-lower {
        margin-top: 3rem;
        font-family: "Lora", serif;
        text-align: center;
      }
      .section-lower a {
        color: black;
        text-decoration: none;
        border-bottom: 2px solid black;
      }
      .section-lower > div {
        margin: 0.5rem;
      }
      .section-links {
        font-family: "Lato", sans-serif;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
      }
      .section-links a {
        color: black;
        text-decoration: none;
      }
      .section-links .item {
        margin: 0 1rem;
        border: 1px solid black;
        padding: 0 0.25rem;
      }
      .tour {
        display: inline-block;
        margin: 0 auto;
        border: 1px solid black;
        border-radius: 3px;
        padding: 0.25rem 2rem;
      }
      .header {
        font-family: "Lora", serif;
        font-size: 2rem;
      }
      .large {
        margin-left: -2rem;
        font-size: 300%;
      }
      .big {
        font-size: 150%;
      }
    `}</style>
  </Layout>
);
