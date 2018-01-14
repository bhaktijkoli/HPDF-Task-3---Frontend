import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {TextField, RaisedButton } from 'material-ui';

class RegisterForm extends Component {
  render() {
    return (
      <form>
        <TextField floatingLabelText="First name" fullWidth/>
        <TextField floatingLabelText="Last name" fullWidth/>
        <TextField floatingLabelText="Email" type="email" fullWidth/>
        <TextField floatingLabelText="Password" type="password" fullWidth/>
        <div className="space"></div>
        <RaisedButton label="Sign Up" primary={true} fullWidth/>
        <div className="space"></div>
      </form>
    );
  }
}
export default withRouter(RegisterForm);
