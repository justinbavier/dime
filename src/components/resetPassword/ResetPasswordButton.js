import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const ResetPasswordButton = ({ formValues, resetPassword }) => {
  return (
    <div>
      <button
        onClick={() => resetPassword(formValues)}
        className="reset-password-submit-button white-text btn-flat left"
      >
        Submit
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.resetPasswordForm.values
  };
}

export default connect(mapStateToProps, actions)(ResetPasswordButton);
