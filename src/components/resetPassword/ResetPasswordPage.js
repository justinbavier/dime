import React, { Component } from 'react';

import ResetPasswordForm from './ResetPasswordForm';

import secondaryLogo from '../../images/secondary-logo.svg';

class ResetPasswordPage extends Component {
  render() {
    return (
      <div id="reset-password">
        <div className="container">
          <div className="row">
            <div className="col s4 offset-s4 m4 offset-m4 center-align">
              <a href="/">
                <img src={secondaryLogo} className="secondary-logo" alt="secondary-logo"/>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="reset-password-card card col s10 m10 l8 offset-s1 offset-m1 offset-l2">

              <div className="row">
                <div className="col s12">
                  <h2 className="center">{` Reset Password `}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <ResetPasswordForm
                    onResetPasswordSubmit={() => console.log("Login form submitted")}
                   />
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ResetPasswordPage;
