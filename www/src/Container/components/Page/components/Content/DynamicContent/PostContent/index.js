import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import {
  fetchPostContent,
  clearPostContent
} from "../../../../../redux/actions/index";
import "./style.css";

class PostContent extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.fetchPostContent = this.props.fetchPostContent;
  }

  callFetchPostContent = pathname => {
    const splitPathname = pathname.split("/");
    const splitLength = splitPathname.length;
    const id = splitPathname[splitLength - 1];
    this.fetchPostContent(parseInt(id, 10));
  };

  componentDidMount() {
    const pathname = this.props.location.pathname;
    this.callFetchPostContent(pathname);
    document.addEventListener("click", () => console.log(this.props));
  }

  componentWillUnmount() {
    this.props.clearPostContent();
  }

  render() {
    const spinner = (
      <div className="spinner">
        <i className="rotating fas fa-spinner fa-6x" />
      </div>
    );

    return (
      <div>
        {!this.props.postContent ? (
          spinner
        ) : (
          <div className="post-meta">
            <h1>{this.props.postContent.title}</h1>
          </div>
          <div className="post-content">
            <ReactMarkdown source={this.props.postContent.content} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postContent: state.postContent
});

const mapDispatchToProps = dispatch => ({
  fetchPostContent: id => dispatch(fetchPostContent(id)),
  clearPostContent: () => dispatch(clearPostContent())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostContent)
);
