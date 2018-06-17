import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import SideBar from './components/SideBar';
import Page from './components/Page';

class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
            <SideBar />
            <Page />
        </div>
      </Provider>
    )
  }
}

export default Container;