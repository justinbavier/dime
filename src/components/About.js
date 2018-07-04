import React, { Component } from 'react';

import secondaryLogo from '../images/secondary-logo.svg';

class About extends Component {
  render() {
    return (
      <div className="about-background">
        <div className="about-container container">
        <div className="vertical-spacer row" />
        <div className="vertical-spacer row" />
        <div className="row">
          <div className="col s4 offset-s4 m4 offset-m4 center-align">
            <a href="/">
              <img src={secondaryLogo} className="secondary-logo" alt="secondary-logo"/>
            </a>
          </div>
        </div>
          <h1 className="about-title center-align">{` About Dime `}</h1>
        </div>
      </div>
    )
  }
}
export default About
