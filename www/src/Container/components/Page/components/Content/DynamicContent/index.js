import React from 'react';
import { Route } from 'react-router';

import Header from '../Header';
import PostContent from './PostContent/index';
import PostList from './PostList/index';


class DynamicContent extends React.Component {

  render () {
    return (
      <div className='content'>
        <Header Text='Posts' />
        <Route exact path='/posts' component={PostList} />
        <Route exact path='/posts/:alias' component={PostContent} />
      </div>
    );
  }
}

export default DynamicContent;