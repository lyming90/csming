import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostList } from '../../redux/actions';
import PostCard from './PostCard';
import Button from '@material-ui/core/Button';

class Posts extends Component {
  constructor(props) {
    super(props);
    // do something
  }

  componentDidMount() {
    this.props.fetchPostList();
    console.log("props.postList!", this.props.postList);
  }

  render() {
    return (
      <div>
        {this.props.doneFetch ? null : <p>Loading</p>}
        {this.props.doneFetch && Object.keys(this.props.postList).map(postTitle => <PostCard Alias={this.props.postList[postTitle]}/>)}
        <Button onClick={() => console.log("props now, ", this.props)}>Show state</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    postList: state.contentReducer.postList,
    doneFetch: state.contentReducer.doneFetch
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostList: () => dispatch(fetchPostList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);