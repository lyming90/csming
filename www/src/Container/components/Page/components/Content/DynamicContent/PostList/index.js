import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
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
      const postCards = postListKeys.filter(id => postList[id].status === 'published').map((id, index) => (
        <PostCard
          key={index}
          title={postList[id].title}
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
          Go to the post
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
    return (
      <div>
        {this.createPostCard()}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => console.log("Store, ", this.props)}
        >
          Debug
        </Button>
      </div>
    );
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
