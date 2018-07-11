import React from "react";
import "./style.css";

const Banner = props => {
  const flagIcon = (
    <span role="img" aria-label="emoji" style={{ marginRight: "0.5rem" }}>☃️</span>
  );

  return (
    <div className="banner disable-select">
      {flagIcon} {props.Text}
    </div>
  );
};

export default Banner;
