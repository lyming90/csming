import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { fetchPostContent, clearState } from '../../../../../redux/actions/index';
import './style.css';

class PostContent extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.fetchPostContent = this.props.fetchPostContent;
  }

  callFetchPostContent = (pathname) => {
    const splitPathname = pathname.split('/');
    const splitLength = splitPathname.length;
    const alias = splitPathname[splitLength-1];
    console.log(alias);
    this.fetchPostContent(alias);
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;
    this.callFetchPostContent(pathname);
  }

  componentWillUnmount() {
    console.log("Unmounting...");
    this.props.clearState();
  }
  

  render() {
    const spinner = <div className='spinner'><i class="rotating fas fa-spinner fa-6x"></i></div>;

    return (
      <div>
        <p>{!this.props.postContent ? spinner : <ReactMarkdown source={this.props.postContent} />}</p>
        <button onClick={() => console.log(this.props)}>Debug</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postContent: state.postContent,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostContent: (alias) => dispatch(fetchPostContent(alias)),
  clearState: () => dispatch(clearState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContent));