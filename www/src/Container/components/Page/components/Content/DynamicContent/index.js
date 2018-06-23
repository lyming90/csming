import React from 'react';
import Header from '../Header';
import PostList from './PostList/index';


class DynamicContent extends React.Component {

  render () {
    return (
      <div className='content'>
        <Header Text='Posts' />
        <PostList/>
      </div>
    );
  }
}

export default DynamicContent;