import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import "./style.css";

class NavMenu extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    const pathName = this.props.location.pathname;
    this.state = {
      pathName: pathName
    };

    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidMount() {
    const pathName = this.props.location.pathname;
    this.setState({
      pathName: pathName === "/" ? "/home" : pathName
    });
  }

  redirectTo = destination => {
    this.props.history.push(destination);
    this.setState({
      pathName: destination
    });
  };

  render() {
    const homeIcon = <i className="fas fa-coffee fa-lg fa-fw" />;
    const resumeIcon = <i className="fas fa-trophy fa-lg fa-fw" />;
    const postsIcon = <i className="fas fa-comment-dots fa-lg fa-fw" />;
    // const projectIcon = <i className="fas fa-crown fa-lg fa-fw" />;

    const menuItemColorScheme = {
      color: "#1E1F26"
    };
    const menuItemStyle = {
      fontFamily: "Open Sans, sans-serif"
    };

    return (
      <div className="menu-list">
        <MenuList>
          <Link to="/">
            <MenuItem style={menuItemStyle}>
              <ListItemIcon style={menuItemColorScheme}>
                {homeIcon}
              </ListItemIcon>
              <span style={menuItemColorScheme}>Home</span>
            </MenuItem>
          </Link>
          <Link to="/bio">
            <MenuItem style={menuItemStyle}>
              <ListItemIcon style={menuItemColorScheme}>
                {resumeIcon}
              </ListItemIcon>
              <span style={menuItemColorScheme}>Bio</span>
            </MenuItem>
          </Link>
          <Link to="/blog">
            <MenuItem style={menuItemStyle}>
              <ListItemIcon style={menuItemColorScheme}>
                {postsIcon}
              </ListItemIcon>
              <span style={menuItemColorScheme}>Posts</span>
            </MenuItem>
          </Link>
          {/* <MenuItem
            selected={this.state.pathName === "/projects"}
            style={menuItemStyle}
            onClick={() => this.redirectTo("/projects")}
          >
            <ListItemIcon style={menuItemColorScheme}>
              {projectIcon}
            </ListItemIcon>
            <span style={menuItemColorScheme}>Projects</span>
          </MenuItem> */}
        </MenuList>
      </div>
    );
  }
}

export default withRouter(NavMenu);
