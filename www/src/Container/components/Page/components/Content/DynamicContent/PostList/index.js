import React from 'react';
import { fetchPostList, fetchPostPreview } from '../../../../../redux/actions/index'
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import PostCard from './component/PostCard/index';
import './style.css'

class PostList extends React.Component{
  constructor(props) {
    super(props);

    this.fetchPostList = this.props.fetchPostList;
    this.fetchPostPreview = this.props.fetchPostPreview;
    this.clearState = this.props.clearState;
  }

  componentDidMount() {
    fetchPostList();
    fetchPostPreview();
  }

  createPostCard = () => {
    const postList = this.props.postList;
    const postPreview = this.props.postPreview;
    if (postList && postPreview) {
      const postListKeys = Object.keys(postList);
      const postCards = postListKeys.map((ref, index) => (
        <PostCard key={index} title={postList[ref].title} preview={postPreview[ref]} alias={ref} />
      ));
      return postCards;
    } else {
      // return placeholder
      const placeHolderColor = '#ccc';
      const placeHolderStyle = {
        backgroundColor: placeHolderColor,
        color: placeHolderColor,
        borderRadius: '10px',
      }
      const titleLoading = <div className='disable-select' style={{
        ...placeHolderStyle,
        width: '60%',
      }}>Loading</div>
      const previewLoading = <div className='disable-select' style={{
        ...placeHolderStyle,
        width: '100%',
      }}>Loading<br/>Loading<br/>Loading<br/></div>
      const linkLoading = <div className='disable-select' style={{
        ...placeHolderStyle,
        width: '15%',
      }}>Loading</div>

      return (
        <div className='placeholder'>
          {
            function(){
              const postCards = [];
              for (let i = 0; i < 4; i++) postCards.push(<PostCard key={i} titleLoading={titleLoading} previewLoading={previewLoading} linkLoading={linkLoading} />);
              return postCards;
            }()
          }
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.createPostCard()}
        <Button variant='contained' color='secondary' onClick={() => console.log("Store, ", this.props)}>Debug</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  postList: state.postList,
  postPreview: state.postPreview,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostList: dispatch(fetchPostList()),
  fetchPostPreview: dispatch(fetchPostPreview()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);