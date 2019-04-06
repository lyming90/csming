import React from "react";
import Link from "next/link";

export default () => (
  <React.Fragment>
    <div className="navbar">
      <div className="navbar-inner">
        <Link prefetch href="/">
          <div className="logo-container">
            <img className="logo" src="/static/assets/dp.jpg" />
            <div className="halo">
              <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.44615311,11.6601601 C6.57294867,5.47967718 12.9131553,1.5 19.9642857,1.5 C27.0154162,1.5 33.3556228,5.47967718 36.4824183,11.6601601 L37.3747245,11.2087295 C34.0793076,4.69494641 27.3961457,0.5 19.9642857,0.5 C12.5324257,0.5 5.84926381,4.69494641 2.55384689,11.2087295 L3.44615311,11.6601601 Z" />
                <path d="M36.4824183,28.2564276 C33.3556228,34.4369105 27.0154162,38.4165876 19.9642857,38.4165876 C12.9131553,38.4165876 6.57294867,34.4369105 3.44615311,28.2564276 L2.55384689,28.7078582 C5.84926381,35.2216412 12.5324257,39.4165876 19.9642857,39.4165876 C27.3961457,39.4165876 34.0793076,35.2216412 37.3747245,28.7078582 L36.4824183,28.2564276 Z" />
              </svg>
            </div>
          </div>
        </Link>
        <div className="item">
          <Link prefetch href="/">
            <a className="link">ME</a>
          </Link>
        </div>
        <div className="item">
          <Link prefetch href="/blog">
            <a className="link">BLOG</a>
          </Link>
        </div>
        {/* <div className="item">
          <Link prefetch href="/capstone-project">
            <a className="link">CAPSTONE</a>
          </Link>
        </div> */}
      </div>
    </div>
    <style jsx>{`
      .navbar {
        padding: 2rem 0.5rem 0 0.5rem;
        font-family: "Lato", sans-serif;
      }
      .logo-container {
        position: relative;
        cursor: pointer;
        margin-right: 2rem;
        margin-left: 2rem;
      }
      .logo {
        display: block;
        height: 3rem;
        width: 3rem;
        border-radius: 3rem;
      }
      .halo {
        position: absolute;
        width: calc(100% + 8px);
        height: calc(100% + 8px);
        top: -4px;
        left: -4px;
      }
      .navbar-inner {
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
        border-bottom: 3px solid;
      }
      @media screen and (max-width: 740px) {
        .logo-container {
          margin-left: 1rem;
          margin-right: 0.75rem;
        }
        .item {
          margin: 0 0.75rem;
        }
      }
    `}</style>
  </React.Fragment>
);
