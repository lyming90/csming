import React from "react";
import { connect } from "react-redux";

// import Button from "@material-ui/core/Button";
import { fetchPostList } from "../../../../../redux/actions/index";

import PostCard from "./component/PostCard/index";
import "./style.css";

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPostList = this.props.fetchPostList;
    this.clearState = this.props.clearState;
  }

  componentDidMount() {
    fetchPostList();
  }

  createPostCard = () => {
    const postList = this.props.postList;
    if (postList) {
      const postListKeys = Object.keys(postList);
      const postCards = postListKeys
        .filter(id => postList[id].status === "published")
        .sort((idA, idB) => {
          // sort by postDate
          const cmp =
            new Date(postList[idA].postDate) - new Date(postList[idB].postDate);
          if (cmp < 0) return 1;
          else if (cmp > 0) return -1;
          else return 0;
        })
        .map((id, index) => (
          <PostCard
            key={index}
            title={postList[id].title}
            postDate={postList[id].postDate}
            preview={postList[id].preview}
            alias={id}
          />
        ));
      return postCards;
    } else {
      const placeHolderColor = "#ccc";
      const placeHolderStyle = {
        backgroundColor: placeHolderColor,
        color: placeHolderColor,
        borderRadius: "10px"
      };
      const titleLoading = (
        <span
          className="disable-select placeholder"
          style={{
            ...placeHolderStyle,
            width: "60%"
          }}
        >
          Loading
        </span>
      );
      const postDateLoading = (
        <span
          className="disable-select placeholder"
          style={{
            ...placeHolderStyle,
            display: "inline"
          }}
        >
          Fuel 4th, 2018
        </span>
      );
      const previewLoading = (
        <span
          className="disable-select placeholder"
          style={{
            ...placeHolderStyle,
            width: "100%"
          }}
        >
          Loading<br />Loading<br />Loading<br />
        </span>
      );
      const linkLoading = (
        <span
          className="disable-select placeholder"
          style={{
            ...placeHolderStyle,
            display: "inline"
          }}
        >
          Go to the posi
        </span>
      );

      return (
        <div className="placeholder">
          {(function() {
            const postCards = [];
            for (let i = 0; i < 4; i++)
              postCards.push(
                <PostCard
                  key={i}
                  titleLoading={titleLoading}
                  postDateLoading={postDateLoading}
                  previewLoading={previewLoading}
                  linkLoading={linkLoading}
                />
              );
            return postCards;
          })()}
        </div>
      );
    }
  };

  render() {
    return <div>{this.createPostCard()}</div>;
  }
}

const mapStateToProps = state => ({
  postList: state.postList
});

const mapDispatchToProps = dispatch => ({
  fetchPostList: dispatch(fetchPostList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
