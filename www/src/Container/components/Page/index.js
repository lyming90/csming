import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

import Banner from './components/Banner/index';
import StaticContent from './components/Content/StaticContent/index';
import DynamicContent from './components/Content/DynamicContent/index';
// import Content from './components/Content/index';
// import MarkdownContent from './components/MarkdownContent/index';

import './style.css'

class Page extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    return (
        <div className='page'>
          <Banner Text='Hey, I am updating this site! Come back later!'/>
          <Switch>
            <Route path='/posts' component={DynamicContent} />
            <Route path='/:statics' component={StaticContent} />
            <Route path='/' component={StaticContent} />
          </Switch>
          <p></p>
          <p className='copy-right disable-select'>&copy; 2018 Ming Yu.</p>
        </div>
    );
  }
}


export default withRouter(Page);