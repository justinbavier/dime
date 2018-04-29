import React, { Component } from "react";

import secondaryLogo from '../images/secondary-logo.svg';

class Signup extends Component {
  render() {
    return (
      <div>
        <div className="signup-wrapper container">
          <div className="vertical-spacer row" />
          <div className="vertical-spacer row" />
          <div className="row">
            <div className="col s4 offset-s4 center-align">
              <a href="/">
                <img src={secondaryLogo} className="secondary-logo"/>
              </a>
            </div>
          </div>

          <div className="row">
            <p className="signup-greeting center-align">{` Signup With The Form Below To Get Started `}</p>
            <p className="signup-instructions center-align">{` It's quick and easy. `}</p>
          </div>

          <div className="row">
            <form className="signup-form col s4 offset-s4">
              <div className="input-field col s12">
                <input className="signup-field" placeholder="Email" id="email" type="text" />
              </div>
              <div className="input-field col s6">
                <input className="signup-field" placeholder="First Name" id="firstName" type="text" />
              </div>
              <div className="input-field col s6">
                <input className="signup-field" placeholder="Last Name" id="lastName" type="text" />
              </div>
              <div className="input-field col s12">
                <input className="signup-field" placeholder="Password" id="password" type="password" />
              </div>
              <button className="signup-button btn-large col s10 offset-s1" type="submit" name="action">
                Next
              </button>
            </form>
          </div>

          <div className="row">
            <a href="/login" className="login-link center-align col s4 offset-s4">
              <p>{` Already have an account? `}</p>
            </a>
          </div>

        </div>

      </div>
    );
  }
}

export default Signup;
