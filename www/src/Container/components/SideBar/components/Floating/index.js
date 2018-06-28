import React from "react";
import "./style.css";

const thumbsUpIcon = <i className="far fa-thumbs-up fa-lg" />;
const facebookIcon = <i className="fab fa-facebook-square fa-lg" />;
const githubIcon = <i className="fab fa-github fa-lg" />;

const Floating = () => (
  <div className="floating">
    <div
      onClick={() =>
        alert("I've received your thumb up, thanks for spreading love!")
      }
    >
      {thumbsUpIcon}
    </div>
    <div
      onClick={() =>
        window.open("https://facebook.com/mingyuliu1916", "_blank")
      }
    >
      {facebookIcon}
    </div>
    <div onClick={() => window.open("https://github.com/lyming90", "_blank")}>
      {githubIcon}
    </div>
  </div>
);

export default Floating;
