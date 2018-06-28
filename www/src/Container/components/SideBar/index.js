import React, { Component } from "react";

import NavMenu from "./components/NavMenu/index";
import Floating from "./components/Floating/index";
import "./style.css";

class SideBar extends Component {
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const floating = document.querySelector(".floating");
      const menuToBottom = document
        .querySelector(".menu-list")
        .getBoundingClientRect().bottom;
      menuToBottom < 0
        ? (floating.style.visibility = "visible")
        : (floating.style.visibility = "hidden");
    });
  }

  render() {
    const avatarURL =
      "https://avatars0.githubusercontent.com/u/19569154?s=460&v=4";

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
