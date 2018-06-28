import React from "react";
import "./style.css";

const Banner = props => {
  const flagIcon = (
    <i className="fas fa-flag fa-sm" style={{ marginRight: "0.5rem" }} />
  );

  return (
    <div className="banner disable-select">
      {flagIcon} {props.Text}
    </div>
  );
};

export default Banner;
