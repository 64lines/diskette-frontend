import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StoragePanel from './storage/StoragePanel';
import './App.css'; 

const App = () => (
  <MuiThemeProvider>
    <StoragePanel />
  </MuiThemeProvider>
);

export default App;
