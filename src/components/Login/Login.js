import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {Paper, FontIcon} from 'material-ui';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import LoginForm from './LoginForm'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="login-content container">
        <div className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <Paper>
              <Tabs
                onChange={this.handleChange}
                value={this.state.slideIndex}>
                <Tab label="Login" value={0} />
                <Tab label="Sign Up" value={1} />
              </Tabs>
              <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange}>
                <div className="content">
                  <LoginForm/>
                </div>
                <div className="content">
                  <h1>Register</h1>
                </div>
              </SwipeableViews>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
