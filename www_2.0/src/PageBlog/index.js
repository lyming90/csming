import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostList } from "src/redux/actions";
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
        <li key={index}>
          <Link to={"/blog/article/".concat(id)}>{articleData.title}</Link>
        </li>
      );
      articleList.push(articleDOM);
    });
    return <ul>{articleList}</ul>;
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
