import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import ResetPasswordField from "./ResetPasswordField";
import ResetPasswordButton from "./ResetPasswordButton";
import formFields from './formFields';

class ResetPasswordForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={ResetPasswordField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    console.log(this.props.resetToken)
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onResetPasswordSubmit)}>
          {this.renderFields()}
          <Link to="/" className="reset-password-cancel-button btn-flat right white-text">
            {` Cancel `}
          </Link>
          <ResetPasswordButton 
            resetToken={this.props.resetToken}
          />
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value!";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "resetPasswordForm"
})(ResetPasswordForm);
