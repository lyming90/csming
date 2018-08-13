import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-lua.min.js";

import { formatDate, setTitle } from "../../../../../../../utils/index";
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
    this.fetchPostContent = this.props.fetchPostContent;
  }

  callFetchPostContent = pathname => {
    const splitPathname = pathname.split("/");
    const splitLength = splitPathname.length;
    const id = splitPathname[splitLength - 1];
    this.fetchPostContent(parseInt(id, 10));
  };

  componentDidUpdate() {
    Prism.highlightAll();
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    this.callFetchPostContent(pathname);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.clearPostContent();
  }

  render() {
    const spinner = (
      <div className="spinner">
        <i className="rotating fas fa-spinner fa-4x" />
        <br />
        <br />
        <br />
        Eagerly loading...
      </div>
    );
    const postContent = this.props.postContent;

    if (!postContent) {
      return [spinner];
    } else {
      const { id, title, preview, content, postDate } = postContent;
      return (
        <div>
          <Helmet>
            <title>{setTitle(title)}</title>
            <meta
              property="og:url"
              content={"https://www.csming.com/blog/article/" + id}
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={setTitle(title)} />
            <meta property="og:description" content={preview} />
          </Helmet>
          <div className="post-meta">
            <div className="post-title">{title}</div>
            <div className="post-date">{formatDate(postDate)}</div>
          </div>
          <div className="post-content">
            <ReactMarkdown source={content} escapeHtml={false} />
          </div>
        </div>
      );
    }
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
