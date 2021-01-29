import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import './App.scss';
import {AppTheme} from "./styles";
import Login from "./pages/Login";

function App() {
  return (
      <ThemeProvider theme={AppTheme}>
          <Login />
      </ThemeProvider>
  );
}

export default App;
