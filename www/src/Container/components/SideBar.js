import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import './style.css';
import { switchPage } from './redux/actions';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
   

class SideBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const avatarURL = 'https://avatars0.githubusercontent.com/u/19569154?s=460&v=4';

    const homeIcon = <i className='fas fa-coffee fa-lg fa-fw'></i>;
    const resumeIcon = <i className='fas fa-trophy fa-lg fa-fw'></i>;
    const postsIcon = <i className='fas fa-comment-dots fa-lg fa-fw'></i>;
    const contactIcon = <i className='fas fa-address-card fa-lg fa-fw'></i>;

    const menuItemColorScheme = {
      color: '#1E1F26',
    };
    const menuItemStyle = {
      fontFamily: 'Open Sans, sans-serif',
    }

    return (
      <div className='sidebar'>
        <div>
          <img className='avatar disable-select' src={avatarURL} alt='avatar' />
        </div>
        <div>
          <MenuList>
            <MenuItem selected={this.props.pageName === 'home'} style={menuItemStyle} onClick={() => this.props.switchPage('home')}>
              <ListItemIcon style={menuItemColorScheme}>{homeIcon}</ListItemIcon>
              <span style={menuItemColorScheme}>Home</span>
            </MenuItem>
            <MenuItem selected={this.props.pageName === 'resume'} style={menuItemStyle} onClick={() => this.props.switchPage('resume')}>
              <ListItemIcon style={menuItemColorScheme}>{resumeIcon}</ListItemIcon>
              <span style={menuItemColorScheme}>Resume</span>
            </MenuItem>
            <MenuItem selected={this.props.pageName === 'posts'} style={menuItemStyle} onClick={() => this.props.switchPage('posts')}>
              <ListItemIcon style={menuItemColorScheme}>{postsIcon}</ListItemIcon>
              <span style={menuItemColorScheme}>Posts</span>
            </MenuItem>
            <MenuItem selected={this.props.pageName === 'contact'} style={menuItemStyle} onClick={() => this.props.switchPage('contact')}>
              <ListItemIcon style={menuItemColorScheme}>{contactIcon}</ListItemIcon>
              <span style={menuItemColorScheme}>Contact</span>
            </MenuItem>
          </MenuList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageName: state.pageName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchPage: (pageName) => dispatch(switchPage(pageName)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);