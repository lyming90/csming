import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Route } from "react-router";

import Header from "../Header";
import PostContent from "./PostContent/index";
import PostList from "./PostList/index";
import { clearPostList } from "../../../../redux/actions/index";
import { setTitle } from "../../../../../../utils/index";

class DynamicContent extends React.Component {
  componentWillUnmount() {
    this.props.clearPostList();
  }

  render() {
    return (
      <div className="content">
        <Helmet>
          <title>{setTitle("Blog")}</title>
          <meta property="og:url" content={"https://www.csming.com/posts/"} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={setTitle("Blog")} />
        </Helmet>
        <Header Text="Blog" />
        <Route exact path="/blog" component={PostList} />
        <Route exact path="/blog/article/:alias" component={PostContent} />
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
