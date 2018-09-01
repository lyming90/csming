import React, { Component } from "react";

import NavMenu from "./components/NavMenu/index";
import Floating from "./components/Floating/index";
import "./style.css";

class SideBar extends Component {
  toggleFloat = () => {
    const floating = document.querySelector(".floating");
    const menuToBottom = document
      .querySelector(".avatar")
      .getBoundingClientRect().bottom;
    menuToBottom < 0 // carefully calculated. If menu-list, then 20 instead of 0
      ? (floating.style.visibility = "visible")
      : (floating.style.visibility = "hidden");
  };

  componentDidMount() {
    window.addEventListener("scroll", this.toggleFloat);
    window.addEventListener("resize", this.toggleFloat);
  }

  render() {
    const avatarURL = "/static/profile.png";

    return (
      <div className="sidebar">
        <div>
          <img className="avatar disable-select" src={avatarURL} alt="avatar" />
        </div>
        <NavMenu />
        <Floating />
      </div>
    );
  }
}

export default SideBar;
