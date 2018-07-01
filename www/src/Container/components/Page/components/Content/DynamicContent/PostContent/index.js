import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { formatDate } from "../../../../../../../utils/index";

import {
  fetchPostContent,
  clearPostContent
} from "../../../../../redux/actions/index";
import "./style.css";

const postFix = "Ming \u00B7 刘明宇 \u00B7 Liu Mingyu";

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

  componentDidUpdate(prevProps) {
    if (prevProps.postContent !== this.props.postContent) {
      const title = this.props.postContent.title;
      document.title = title + " \u00B7 " + postFix;
    }
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    this.callFetchPostContent(pathname);
  }

  componentWillUnmount() {
    document.title = postFix;
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
          <div>
            <div className="post-meta">
              <div className="post-title">{this.props.postContent.title}</div>
              <div className="post-date">{formatDate(this.props.postDate)}</div>
            </div>
            <div className="post-content">
              <ReactMarkdown source={this.props.postContent.content} escapeHtml={false} />
            </div>
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
