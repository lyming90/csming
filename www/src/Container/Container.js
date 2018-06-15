import React, { Component } from 'react';
import SideBar from './components/SideBar';
import Page from './components/Page';

class Container extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '2rem',
      justifyContent: 'space-evenly',
    }

    return (
      <div class='container' style={containerStyle}>
        <SideBar />
        <Page />
      </div>
    )
  }
}

export default Container;