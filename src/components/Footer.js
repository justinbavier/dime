import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

// FONT AWESOME ICONS
import Facebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import Instagram from '@fortawesome/fontawesome-free-brands/faInstagram';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="page-footer">
          <div className="row">
            <Link className="footer-link" to="/about">{` About `}</Link>
          </div>
          <div className="row">
            <a href="https://www.facebook.com/justgiveadime/"><FontAwesomeIcon className="social-icon" icon={Facebook} /></a>
            <a href="https://www.instagram.com/give_a_dime/"><FontAwesomeIcon className="social-icon" icon={Instagram} /></a>
          </div>
          <div className="footer-copyright">
            <div className="container">
              {` © 2018 Give a Dime `}
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
