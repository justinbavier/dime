import React, { Component } from "react";
import { Link } from "react-router-dom";

import secondaryLogo from "../images/secondary-logo.svg";

class Header extends Component {
  render() {
    return (
      <div>
        <nav id="nav">
          <div className="nav-wrapper">
            <div className="nav-content-wrapper">
              <div className="left brand-logo">
                <img
                  src={secondaryLogo}
                  className="nav-logo"
                  alt="secondary-logo"
                />
              </div>
              <ul className="right">
                <li className="nav-menu-item nav-menu-item-border">
                  <Link to="/signup" className="center-align">
                    Join
                  </Link>
                </li>
                <li className="nav-menu-item">
                  <Link to="/login" className="center-align">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
