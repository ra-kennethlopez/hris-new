import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import {AppTheme} from './styles';
import {CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
    return (
      <ThemeProvider theme={AppTheme}>
          <CssBaseline />
          <Router>
              <Switch>
                  <Route exact path='/'>
                      <Login />
                  </Route>
                  <Route exact path='/login'>
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
