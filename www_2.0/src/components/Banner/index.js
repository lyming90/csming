import React from "react";

import * as styles from "./style.scss";

const Banner = props => {
  const flagIcon = (
    <span role="img" aria-label="emoji" style={{ marginRight: "0.5rem" }}>
      ☃️
    </span>
  );

  return (
    <div className={styles.banner}>
      {flagIcon} {props.text}
    </div>
  );
};

export default Banner;
