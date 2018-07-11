import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import Banner from "./components/Banner/index";
import NavMenu from "./components/NavMenu";
import StaticContent from "./components/Content/StaticContent/index";
import DynamicContent from "./components/Content/DynamicContent/index";

import "./style.css";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const anchorEl = this.state.anchorEl;

    return (
      <div className="page">
        <Banner Text="Hey, thanks for visiting!" />
        <Switch>
          <Route path="/posts" component={DynamicContent} />
          <Route path="/:statics" component={StaticContent} />
          <Route path="/" component={StaticContent} />
        </Switch>
        <p />
        <Button
          variant="fab"
          color="primary"
          aria-label="menu"
          aria-haspopup="true"
          className="float-button"
          onClick={this.handleClick}
        >
          <Icon>menu</Icon>
        </Button>
        <NavMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          handleClose={this.handleClose}
        />
        <p className="copy-right disable-select">
          <span role="img" aria-label="emoji">
            💪
          </span>{" "}
          Last released on July 10th.<br />
          <span role="img" aria-label="emoji">
            🚀
          </span>{" "}
          I constantly update this site to keep
          you impressed.
        </p>
        <p className="copy-right disable-select">&copy; 2018 Ming Y. Liu</p>
      </div>
    );
  }
}

export default withRouter(Page);
