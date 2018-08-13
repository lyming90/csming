import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./style.scss";

const homeIcon = <i className="fas fa-coffee fa-sm fa-fw" />;
const resumeIcon = <i className="fas fa-trophy fa-sm fa-fw" />;
const blogIcon = <i className="fas fa-comment-dots fa-sm fa-fw" />;
// const projectIcon = <i className="fas fa-crown fa-lg fa-fw" />;

class SideBar extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Link to="/">
          <div>
            <span className={styles.icon}>{homeIcon}</span> Home
          </div>
        </Link>
        <Link to="/bio">
          <div>
            <span className={styles.icon}>{resumeIcon}</span> Bio
          </div>
        </Link>
        <Link to="/blog">
          <div>
            <span className={styles.icon}>{blogIcon}</span> Blog
          </div>
        </Link>
        {/* <MenuList>
          <Link to="/">
            <MenuItem>
              <ListItemIcon>{homeIcon}</ListItemIcon>
              <span>Home</span>
            </MenuItem>
          </Link>
          <Link to="/bio">
            <MenuItem>
              <ListItemIcon>{resumeIcon}</ListItemIcon>
              <span>Bio</span>
            </MenuItem>
          </Link>
          <Link to="/blog">
            <MenuItem>
              <ListItemIcon>{postsIcon}</ListItemIcon>
              <span>Posts</span>
            </MenuItem>
          </Link>
        </MenuList>
      </div> */}
      </div>
    );
  }
}

export default SideBar;
