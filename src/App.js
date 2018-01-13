import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <BrowserRouter>
             <Route exact path="/" component={Login}/>
          </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
export default App;
