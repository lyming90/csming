import React from "react";
import { Helmet } from 'react-helmet';
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
          <title>{setTitle('Posts')}</title>
          <meta property="og:url"         content={"https://www.csming.com/posts/"} />
          <meta property="og:type"        content= "website"/>
          <meta property="og:title"       content={setTitle('Posts')} />
        </Helmet>
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
