import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class NavMenu extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    anchorEl: PropTypes.object,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const pathName = this.props.location.pathname;
    this.state = {
      pathName: pathName,
      open: Boolean(this.props.anchorEl),
      anchorEl: this.props.anchorEl
    };

    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidMount() {
    const pathName = this.props.location.pathname;
    this.setState({
      pathName: pathName === '/' ? '/home' : pathName
    });
  }

  redirectTo = destination => {
    this.props.history.push(destination);
    this.setState({
      pathName: destination
    });
  };

  handleClick = destination => {
    this.redirectTo(destination);
    this.props.handleClose();
  };

  render() {
    return (
      <Menu
        className="page-nav-menu"
        anchorEl={this.props.anchorEl}
        open={Boolean(this.props.anchorEl)}
        onClose={this.props.handleClose}
      >
        <MenuItem
          selected={this.state.pathName === "/home"}
          onClick={() => this.handleClick("/home")}
        >
          Home
        </MenuItem>
        <MenuItem
          selected={this.state.pathName === "/resume"}
          onClick={() => this.handleClick("/resume")}
        >
          Resume
        </MenuItem>
        <MenuItem
          selected={this.state.pathName === "/posts"}
          onClick={() => this.handleClick("/posts")}
        >
          Posts
        </MenuItem>
        <MenuItem
          selected={this.state.pathName === "/projects"}
          onClick={() => this.handleClick("/projects")}
        >
          Projects
        </MenuItem>
      </Menu>
    );
  }
}

export default withRouter(NavMenu);
