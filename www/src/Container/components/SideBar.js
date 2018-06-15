import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import './style.css';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelected: {
        home: true,
        resume: false,
        posts: false,
        contact: false,
      }
    }

    this.onResumeClick = this.onResumeClick.bind(this);
  }

  onHomeClick = (event) => {
    this.setState({
      menuSelected: {
        home: true,
        resume: false,
        posts: false,
        contact: false,
      }
    });
    window.location.assign('/home');
  };

  onResumeClick = (event) => {
    this.setState({
      menuSelected: {
        home: false,
        resume: true,
        posts: false,
        contact: false,
      }
    });
    window.location.assign('/resume');
  };

  onPostClick = (event) => {
    this.setState({
      menuSelected: {
        home: false,
        resume: false,
        posts: true,
        contact: false,
      }
    });
    window.location.assign('/posts');
  };

  onContactClick = (event) => {
    this.setState({
      menuSelected: {
        home: false,
        resume: false,
        posts: false,
        contact: true,
      }
    });
    window.location.assign('/contact');
  };


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
            <MenuItem selected={this.state.menuSelected.home} style={menuItemStyle} onClick={this.onHomeClick}>
              <ListItemIcon style={menuItemColorScheme}>{homeIcon}</ListItemIcon>
              <span style={menuItemColorScheme}>Home</span>
            </MenuItem>
            <MenuItem selected={this.state.menuSelected.resume} style={menuItemStyle} onClick={this.onResumeClick}>
              <ListItemIcon style={menuItemColorScheme}>{resumeIcon}</ListItemIcon>
              <span style={menuItemColorScheme}>Resume</span>
            </MenuItem>
            <MenuItem selected={this.state.menuSelected.posts} style={menuItemStyle} onClick={this.onPostClick}>
              <ListItemIcon style={menuItemColorScheme}>{postsIcon}</ListItemIcon>
              <span style={menuItemColorScheme}>Posts</span>
            </MenuItem>
            <MenuItem selected={this.state.menuSelected.contact} style={menuItemStyle} onClick={this.onContactClick}>
              <ListItemIcon style={menuItemColorScheme}>{contactIcon}</ListItemIcon>
              <span style={menuItemColorScheme}>Contact</span>
            </MenuItem>
          </MenuList>
        </div>
      </div>
    );
  }
}

export default SideBar;