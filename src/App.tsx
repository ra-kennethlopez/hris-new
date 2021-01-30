import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import './App.scss';
import {AppTheme} from './styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <ThemeProvider theme={AppTheme}>
          <Router>
              <Switch>
                  <Route exact path='/'>
                      <Login />
                  </Route>
                  <Route path='/login'>
                      <Login />
                  </Route>
                  <Route path="*">
                      <NotFound />
                  </Route>
              </Switch>
          </Router>
      </ThemeProvider>
  );
}

export default App;
