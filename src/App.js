import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DataButton from './components/data_button.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <AppBar title="CryptoLight"/>
        <DataButton />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
