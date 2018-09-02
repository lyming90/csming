import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import statics from "./statics/index";

import { setTitle } from "../../../../../../utils/index";
import "../style.css";

class StaticContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "",
      content: ""
    };

    this.fetchContent = this.fetchContent.bind(this);
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    this.fetchContent(pathname);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const pathname = this.props.location.pathname;
      this.fetchContent(pathname);
    }
  }

  fetchContent = pathname => {
    let header;
    let content;

    switch (pathname) {
      case "/":
        header = statics.home.header;
        content = statics.home.content;
        break;
      case "/home":
        header = statics.home.header;
        content = statics.home.content;
        break;
      case "/bio":
        header = statics.resume.header;
        content = statics.resume.content;
        break;
      case "/projects":
        header = statics.projects.header;
        content = statics.projects.content;
        break;
      case "/vote-en":
        header = statics.vote_en.header;
        content = statics.vote_en.content;
        break;
      case "/vote-cn":
        header = statics.vote_cn.header;
        content = statics.vote_cn.content;
        break;
      default:
        header = "404 Not Found";
        content = "Heartily sorry.";
        break;
    }

    this.setState({
      header: header,
      content: content
    });
  };

  render() {
    const { header } = this.state;
    return (
      <div className="content">
        <Helmet>
          <title>{setTitle(header)}</title>
          <meta
            property="og:url"
            content={"https://www.csming.com/" + header}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={setTitle(header)} />
        </Helmet>
        <Header Text={this.state.header} />
        <div>{this.state.content}</div>
      </div>
    );
  }
}

export default StaticContent;
