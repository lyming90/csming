import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostList } from '../../redux/actions';
import PostCard from './PostCard';
import Button from '@material-ui/core/Button';

const spinner = <i class="rotating fas fa-spinner fa-6x"></i>;

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
        {this.props.doneFetch ? null : <p style={{textAlign: 'center'}}>{spinner}</p>}
        {this.props.doneFetch && Object.keys(this.props.postList).map(postTitle => <PostCard key={this.props.postList[postTitle]} Alias={this.props.postList[postTitle]}/>)}
        <Button variant='contained' color='secondary' onClick={() => console.log("Props now, ", this.props)}>Debug</Button>
        <Button variant='contained' color='primary' onClick={() => this.props.fetchPostList()}>Reload</Button>
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