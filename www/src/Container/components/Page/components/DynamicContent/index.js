import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostContent } from '../redux/actions';
import ReactMarkDown from 'react-markdown';
import Button from '@material-ui/core/Button';

const spinner = <i class="rotating fas fa-spinner fa-6x"></i>;

const placeHolderColor = '#ccc';

const titleLoading = <div className='disable-select' style={{
  backgroundColor: placeHolderColor,
  color: placeHolderColor,
  width: '60%',
}}>Loading</div>

const contentLoading = <div className='disable-select' style={{
  backgroundColor: placeHolderColor,
  color: placeHolderColor,
  width: '100%',
}}>Loading<br/>Loading<br/>Loading<br/></div>

class MarkdownContent extends Component {
  constructor(props) {
    super(props);
    // do something
  }

  componentDidMount() {
    this.props.fetchPostContent(this.props.Alias);
  }

  render() {
    return (
      <div class='markdown-content'>
        <p className='markdown-content-title'>{this.props.Title}</p>
        {this.props.DoneFetch ? <ReactMarkDown escapeHtml={false} source={this.props.Content} /> : contentLoading}
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Alias: ownProps.Alias,
    Title: state.contentReducer.postContent && state.contentReducer.postContent[ownProps.Alias]
      ? state.contentReducer.postContent[ownProps.Alias].title
      : [titleLoading],
    Content: state.contentReducer.postContent && state.contentReducer.postContent[ownProps.Alias]
      ? state.contentReducer.postContent[ownProps.Alias].content
      : [contentLoading],
    DoneFetch: state.contentReducer.postContent && state.contentReducer.postContent[ownProps.Alias]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostContent: (alias) => dispatch(fetchPostContent(alias))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownContent);