import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";

import { fetchPostContent, clearPostContent } from "src/redux/actions";

import * as styles from "./style.scss";

class PageArticle extends React.Component {
  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    console.log("id", id);
    this.props.fetchPostContent(id);
  }

  render() {
    const data = this.props.postContent;
    if (!data) {
      return <div>Loading</div>;
    }
    const { id, title, preview, content, postDate } = data;
    return (
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <ReactMarkdown source={content} escapeHtml={false} />
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
  )(PageArticle)
);
