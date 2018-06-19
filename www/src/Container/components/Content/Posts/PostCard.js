import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { fetchPostContent } from '../../redux/actions';
import Button from '@material-ui/core/Button';


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
      <div>
        <Paper>
          <p>This is a postcard.</p>
          <p>Link to {this.props.Alias}</p>
          <p><Link to={'/post/' + this.props.Alias}>Here is the link.</Link></p>
          <Button onClick={() => console.log("props now, ", this.props)}>Show state</Button>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    Alias: ownProps.Alias
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostContent: (alias) => dispatch(fetchPostContent(alias))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);