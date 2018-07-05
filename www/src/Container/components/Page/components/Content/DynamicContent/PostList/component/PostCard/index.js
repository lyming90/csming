import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { formatDate } from '../../../../../../../../../utils/index';

import "./style.css";

class PostCard extends React.Component {
  render() {
    return (
      <div className="postcard">
        <p className="card-title">
          {this.props.titleLoading
            ? this.props.titleLoading
            : <Link to={`/posts/${this.props.alias}`} style={{color: "black", borderBottom: "none"}}>{this.props.title}</Link>}
        </p>
        {<div className="post-date">{this.props.postDateLoading ? this.props.postDateLoading : formatDate(this.props.postDate)}</div>}
        {this.props.previewLoading ? (
          <p>{this.props.previewLoading}</p>
        ) : (
          <ReactMarkdown source={this.props.preview} />
        )}
        <p>
          {this.props.linkLoading ? (
            this.props.linkLoading
          ) : (
            <Link to={`/posts/${this.props.alias}`}>Go to the post</Link>
          )}
        </p>
      </div>
    );
  }
}

export default PostCard;
