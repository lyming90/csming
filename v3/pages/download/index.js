import React from "react";
import Router from "next/router";

class Download extends React.Component {
  static getInitialProps = ({ query }) => ({ filename: query.filename });

  componentDidMount() {
    if (!this.props.filename) {
      Router.push("/");
    } else {
      Router.push(`/static/download/${this.props.filename}`);
    }
  }

  render() {
    return <div />;
  }
}

export default Download;
