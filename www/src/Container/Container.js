import React, { Component } from 'react';
import SideBar from './components/SideBar';
import Page from './components/Page';

class Container extends Component {
  render() {
    return (
      <div className='container'>
        <SideBar />
        <Page />
      </div>
    )
  }
}

export default Container;