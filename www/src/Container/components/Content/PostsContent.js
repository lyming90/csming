import React from 'react';
import Header from './Header';
import './style.css';

const PostsContent = (props) => {
  return (
    <div className='posts-content'>
      <Header Text='Posts' />
      <p>
        You know what? This page is not done yet, but I promise it will look thrilling!
      </p>
    </div>
  );
};

export default PostsContent;