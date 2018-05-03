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
            <div className="col s4 offset-s4 m4 offset-m4 center-align">
              <a href="/">
                <img src={secondaryLogo} className="secondary-logo" alt="secondary-logo"/>
              </a>
            </div>
          </div>

          <div className="row">
            <p className="signup-greeting col s10 offset-s1 m12 center-align">{` Signup With The Form Below To Get Started `}</p>
            <p className="signup-instructions col s12 m12 center-align">{` It's quick and easy. `}</p>
          </div>

          <div className="row">
            <form className="signup-form col s12 m4 offset-m4">
              <div className="input-field col s12 m12">
                <input className="signup-field" placeholder="Email" id="email" type="text" />
              </div>
              <div className="input-field col s6 m6">
                <input className="signup-field" placeholder="First Name" id="firstName" type="text" />
              </div>
              <div className="input-field col s6 m6">
                <input className="signup-field" placeholder="Last Name" id="lastName" type="text" />
              </div>
              <div className="input-field col s12 m12">
                <input className="signup-field" placeholder="Password" id="password" type="password" />
              </div>
              <button className="signup-next-button btn-large col s10 offset-s1 m10 offset-m1" type="submit" name="action">
                Next
              </button>
            </form>
          </div>

          <div className="row">
            <a href="/login" className="login-link center-align col s10 offset-s1 m4 offset-m4">
              <p>{` Already have an account? `}</p>
            </a>
          </div>

        </div>

      </div>
    );
  }
}

export default Signup;
