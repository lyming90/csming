import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./style.scss";

class Card extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <Link to={`/blog/article/${this.props.alias}`}>
            {this.props.title}
          </Link>
        </div>
        <div className={styles.date}>{this.props.date}</div>
        <div className={styles.preview}>{this.props.preview}</div>
      </div>
    );
  }
}

export default Card;
