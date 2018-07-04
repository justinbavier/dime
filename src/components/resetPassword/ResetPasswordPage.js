import React, { Component } from 'react';

import ResetPasswordForm from './ResetPasswordForm';

class ResetPasswordPage extends Component {
  render() {
    return (
      <div id="reset-password">
        <div className="container">
          <div className="row">
            <h2 className="center">{` Reset Password `}</h2>
          </div>
          <div className="row">
            <div className="card z-depth-0 col l8 offset-l2">
              <div className="card-content">
                <ResetPasswordForm
                  onResetPasswordSubmit={() => console.log("Login form submitted")}
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ResetPasswordPage;
