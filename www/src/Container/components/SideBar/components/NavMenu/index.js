import React from  'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

class NavMenu extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    const pathName = this.props.location.pathname;
    this.state = {
      pathName: pathName
    };

    this.redirectTo = this.redirectTo.bind(this);
  }

  redirectTo = (destination) => {
    this.props.history.push(destination);
    this.setState({
      pathName: destination
    });
  }

  render() {
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
      <div className='menu-list'>
        <MenuList>
            <MenuItem selected={this.state.pathName === '/home'} style={menuItemStyle} onClick={() => this.redirectTo('/home')}>
              <ListItemIcon style={menuItemColorScheme}>{homeIcon}</ListItemIcon>
              <span style={menuItemColorScheme}>Home</span>
            </MenuItem>
          <MenuItem selected={this.state.pathName === '/resume'} style={menuItemStyle} onClick={() => this.redirectTo('/resume')}>
            <ListItemIcon style={menuItemColorScheme}>{resumeIcon}</ListItemIcon>
            <span style={menuItemColorScheme}>Resume</span>
          </MenuItem>
          <MenuItem selected={this.state.pathName === '/posts'} style={menuItemStyle} onClick={() => this.redirectTo('/posts')}>
            <ListItemIcon style={menuItemColorScheme}>{postsIcon}</ListItemIcon>
            <span style={menuItemColorScheme}>Posts</span>
          </MenuItem>
          <MenuItem selected={this.state.pathName === '/contact'} style={menuItemStyle} onClick={() => this.redirectTo('/contact')}>
            <ListItemIcon style={menuItemColorScheme}>{contactIcon}</ListItemIcon>
            <span style={menuItemColorScheme}>Contact</span>
          </MenuItem>
        </MenuList>
      </div>
    )
  }
}

export default withRouter(NavMenu);