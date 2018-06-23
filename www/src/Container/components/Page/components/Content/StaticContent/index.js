import React, { Component } from 'react';
import Header from '../Header';
import statics from './statics/index';

import '../style.css';

class StaticContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '',
      content: ''
    }

    this.fetchContent = this.fetchContent.bind(this);
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    this.fetchContent(pathname);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const pathname = this.props.location.pathname;
      this.fetchContent(pathname);
    }
  }
  

  fetchContent = (pathname) => {
    let header;
    let content;

    switch (pathname) {
      case '/home':
        header = statics.home.header;
        content = statics.home.content;
        break;
      case '/resume':
        header = statics.resume.header;
        content = statics.resume.content;
        break;
      case '/contact':
        header = statics.contact.header;
        content = statics.contact.content;
        break;
      default:
        header = '404 Not Found',
        content = 'Heartily sorry.'
        break;
    }

    this.setState({
      header: header,
      content: content,
    })
  }

  render () {
    return (
      <div className='content'>
        <Header Text={this.state.header} />
        <div>{this.state.content}</div>
      </div>
    );
  }
};

export default StaticContent;