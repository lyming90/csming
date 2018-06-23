import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './components/redux/store';
import SideBar from './components/SideBar/index';
import Page from './components/Page/index';
import './style.css';

class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div className='app-wrapper'>
              <div className='container'>
                <SideBar />
                <Page />
              </div>
            </div>
        </Router>
      </Provider>
    )
  }
}

export default Container;