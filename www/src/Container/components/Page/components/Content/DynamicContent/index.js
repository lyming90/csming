import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";

import Header from "../Header";
import PostContent from "./PostContent/index";
import PostList from "./PostList/index";
import { clearPostList } from "../../../../redux/actions/index";

class DynamicContent extends React.Component {
  componentWillUnmount() {
    // console.log('List unmounting...');
    this.props.clearPostList();
  }

  render() {
    return (
      <div className="content">
        <Header Text="Posts" />
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/posts/:alias" component={PostContent} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearPostList: () => dispatch(clearPostList())
});

export default connect(
  null,
  mapDispatchToProps
)(DynamicContent);
