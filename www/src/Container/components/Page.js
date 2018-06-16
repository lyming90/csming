import React, { Component } from 'react';
import { HomeContent, ResumeContent, ContactContent, PostsContent } from './Content';
import Banner from './Banner';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.css'

class Page extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='page'>
          <Banner Text='Hey, I am updating this site! Come back later!'/>
          <Switch>
            <Route exact path='/home' component={HomeContent}/>
            <Route exact path='/resume' component={ResumeContent}/>
            <Route exact path='/posts' component={PostsContent}/>
            <Route exact path='/contact' component={ContactContent}/>
            <Route path='/' component={HomeContent}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Page;