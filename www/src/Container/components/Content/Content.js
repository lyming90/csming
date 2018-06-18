import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { triggerRedirection, retrieveContentByPageName } from '../redux/actions';
import Header from './Header';
import './style.css';
import { posts as postsContent, home as homeContent, resume as resumeContent, contact as contactContent } from './statics';
import PropTypes from 'prop-types';

const shouldBeReplacedByRealDatabase = {
  home: {
    header: 'Home',
    content: homeContent,
  },
  resume: {
    header: 'Resume',
    content: resumeContent,
  },
  posts: {
    header: 'Posts',
    content: postsContent,
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

  componentDidUpdate(prevProps) {
    if (prevProps.pageName !== this.props.pageName) {
      const pagePath = shouldBeReplacedByRealDatabase[this.props.pageName];

      const header = pagePath
        ? pagePath.header
        : '404 Not Found';
      const content = pagePath
        ? pagePath.content
        : <p>Heartily sorry.</p>;
      
      this.setState({
        header: header,
        content: content,
      });
      console.log("Page updated.");
    }
  }

  componentDidMount() {
    const pagePath = shouldBeReplacedByRealDatabase[this.props.pageName];
    // experiment
    this.props.retrieveContent('home');

    const header = pagePath
      ? pagePath.header
      : '404 Not Found';
    const content = pagePath
      ? pagePath.content
      : <p>Heartily sorry.</p>;
    
    this.setState({
      header: header,
      content: content,
    });
    console.log("Page loaded.");
  }

  render () {
    const redirect = this.props.redirect;
    if (redirect) {
      this.props.triggerRedirection();
      const redirectTo = this.props.pageName;
      console.log("A redirection is triggered, to ", redirectTo);
      return <Redirect to={'/' + redirectTo} />
    }

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
    retrieveContent: (pageName) => dispatch(retrieveContentByPageName(pageName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);