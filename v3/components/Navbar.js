import React from "react";
import Link from "next/link";

export default () => (
  <React.Fragment>
    <div className="navbar">
      <div className="navbar-inner">
        <Link href="/">
          <div className="logo-container">
            <img className="logo" src="/static/assets/M.png" />
          </div>
        </Link>
        <div className="item">
          <Link href="/blog">
            <a className="link">BLOG</a>
          </Link>
        </div>
        <div className="item">
          <Link href="#">
            <a className="link">VENTURE</a>
          </Link>
        </div>
      </div>
    </div>
    <style jsx>{`
      .navbar {
        padding: 2rem 0.5rem 0 0.5rem;
        font-family: "Lato", sans-serif;
      }
      .logo-container {
        flex: self-end;
        cursor: pointer;
      }
      .logo {
        display: block;
        height: 2.25rem;
        width: 2.25rem;
        margin-right: 2rem;
        margin-left: 1rem;
      }
      .navbar-inner {
        max-width: 1032px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
      .item {
        margin: 0 2rem;
      }
      .link {
        text-decoration: none;
        color: black;
      }
      .link:hover {
        color: dimgrey;
        border-bottom: 3px solid dimgrey;
      }
    `}</style>
  </React.Fragment>
);
