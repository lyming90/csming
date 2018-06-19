import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './style.css'
import { fetchPostContent } from '../../redux/actions';

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

const linkLoading = <div className='disable-select' style={{
  backgroundColor: placeHolderColor,
  color: placeHolderColor,
  width: '15%',
}}>Loading</div>


class PostCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Going to pass in", this.props.Alias);
    this.props.fetchPostContent(this.props.Alias);
  }

  render() {
    return (
      <div class='postcard'>
          <p className='card-title'>{this.props.Title}</p>
          <p className='upsize'>{this.props.Content}</p>
          <p>
            {
              this.props.DoneFetch 
              ? <Link to={'/post/' + this.props.Alias}>Go to the post.</Link>
              : linkLoading
            }
          </p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("State as of postcard", state);
  return {
    Alias: ownProps.Alias,
    Title: state.contentReducer.postContent && state.contentReducer.postContent[ownProps.Alias]
      ? state.contentReducer.postContent[ownProps.Alias].title
      : [titleLoading],
    Content: state.contentReducer.postContent && state.contentReducer.postContent[ownProps.Alias]
      ? state.contentReducer.postContent[ownProps.Alias].content.substring(0, 255) + '...'
      : [contentLoading],
    DoneFetch: state.contentReducer.postContent && state.contentReducer.postContent[ownProps.Alias]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostContent: (alias) => dispatch(fetchPostContent(alias))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);