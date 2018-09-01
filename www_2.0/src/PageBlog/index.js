import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostList } from "src/redux/actions";
import Card from "./component/Card";

// import * as styles from "./style.scss";

class PageBlog extends React.PureComponent {
  componentDidMount() {
    this.props.fetchPostList();
  }

  render() {
    const data = this.props.postList;
    if (!data || Object.keys(data).length < 1) {
      return <div>Hi</div>;
    }
    const articleIdList = Object.keys(data);
    let articleList = [];
    articleIdList.forEach((id, index) => {
      const articleData = data[id];
      const articleDOM = (
        <Card
          key={index}
          title={articleData.title}
          date={articleData.postDate}
          preview={articleData.preview}
          alias={articleData.id}
        />
      );
      articleList.push(articleDOM);
    });
    return <div>{articleList}</div>;
  }
}

const mapStateToProps = state => ({
  postList: state.postList
});

const mapDispatchToProps = dispatch => ({
  fetchPostList: () => dispatch(fetchPostList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageBlog);
