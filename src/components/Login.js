import React, { Component } from "react";

import secondaryLogo from '../images/secondary-logo.svg';

class Login extends Component {
  render() {
    return (
      <div>
        <div className="login-wrapper container">
          <div className="vertical-spacer row" />
          <div className="vertical-spacer row" />
          {/*<div className="row">
            <div className="box col s1" />
            <div className="box col s1" />
            <div className="box col s1" />
            <div className="box col s1" />
            <div className="box col s1" />
            <div className="box col s1" />
            <div className="box col s1" />
            <div className="box col s1" />
            <div className="box col s1" />
            <div className="box col s1" />
            <div className="box col s1" />
            <div className="box col s1" />
          </div>*/}
          <div className="row">
            <div className="col s4 offset-s4 center-align">
              <a href="/">
                <img src={secondaryLogo} className="secondary-logo"/>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="login-card card col s6 offset-s3">
              <div className="row">
                <p className="login-greeting center-align">{` Welcome Back, It's Good To See You. `}</p>
                <p className="login-instructions center-align">{` You know the drill, just enter your information below `}</p>
              </div>
              <div className="row">
                <form className="login-form col s8 offset-s2">
                  <div className="input-field col s12">
                    <input className="login-field" placeholder="Email" id="email" type="text" />
                  </div>
                  <div className="input-field col s12">
                    <input className="login-field" placeholder="Password" id="password" type="password" />
                  </div>
                  <button className="login-button btn-large col s10 offset-s1" type="submit" name="action">
                    Login
                  </button>
                </form>
              </div>
              <div className="row">
                <a href="/signup" className="signup-link center-align col s8 offset-s2">
                  <p>{` Still need to signup for an account? `}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
