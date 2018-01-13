import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {TextField, RaisedButton } from 'material-ui';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <TextField floatingLabelText="Username" fullWidth/>
        <TextField floatingLabelText="Password" type="password" fullWidth/>
        <div className="space"></div>
        <RaisedButton label="Login" primary={true} fullWidth/>
        <div className="space-50"></div>
      </form>
    );
  }
}
export default withRouter(LoginForm);
