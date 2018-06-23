import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

import StaticContent from './components/Content/StaticContent/index';
import Banner from './components/Banner/index';
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
            <Route exact path='/posts' render={() => <div>Not done</div>} />
            <Route exact path='/:statics' component={StaticContent} />
            <Route path='/' component={StaticContent} />
          </Switch>
          <p></p>
          <p className='copy-right disable-select'>&copy; 2018 Ming Yu.</p>
        </div>
    );
  }
}


export default withRouter(Page);