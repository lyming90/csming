import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerRedirection } from '../redux/actions';
import Header from './Header';
import './style.css';
import { home as homeContent, resume as resumeContent, contact as contactContent } from './statics';
import Posts from './Posts';
import PropTypes from 'prop-types';

const staticContent = {
  home: {
    header: 'Home',
    content: homeContent,
  },
  resume: {
    header: 'Resume',
    content: resumeContent,
  },
  contact: {
    header: 'Contact',
    content: contactContent,
  },
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '',
      content: '',
    }
  }

  fetchPageContent = (pageName) => {
    if (pageName === 'posts') {
      return {
        header: 'Posts',
        content: <Posts />
      }
    } else {
      const pagePath = staticContent[pageName];
      return pagePath
        ? {
          header: pagePath.header,
          content: pagePath.content
        } : {
          header: '404 Not Found',
          content: 'Heartily sorry.'
        };
    }
  }

  componentDidMount() {
    console.log('props', this.props);
  }

  render () {
    const redirect = this.props.redirect;

    return (
      <div className='content'>
        <Header Text={this.state.header} />
        <div>{this.state.content}</div>
      </div>
    );
  }
};

Content.propTypes = {
  pageName: PropTypes.string,
}

const mapStateToProps = (state) => {
  console.log("Let's see what's in state!", state);
  return {
    redirect: state.pageReducer.redirect,
    pageName: state.pageReducer.pageName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerRedirection: () => dispatch(triggerRedirection()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);