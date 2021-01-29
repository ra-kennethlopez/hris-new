import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import './App.scss';
import LoginForm from "./components/LoginForm";
import {AppTheme} from "./styles";

function App() {
  return (
      <>
        <ThemeProvider theme={AppTheme}>
           <LoginForm />
        </ThemeProvider>
      </>
  );
}

export default App;
