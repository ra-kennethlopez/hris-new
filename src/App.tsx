import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import {AppTheme} from './styles';
import {CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch, useHistory, useLocation} from 'react-router-dom'
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import {isLoggedIn} from "./utils";
import Dashboard from "./pages/Dashboard";

const PublicRoutes: React.FC = () => {
    return (
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
    );
}

const PrivateRoutes: React.FC = () => {
    const location = useLocation();
    const history = useHistory();
    console.log('path: ', location.pathname)
    if (location.pathname === '/login') {
        history.replace('/');
    }

    return (
        <Switch>
            <Route exact path='/'>
                <Dashboard />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
}

function App() {
    return (
      <ThemeProvider theme={AppTheme}>
          <CssBaseline />
          <Router>
              {isLoggedIn() ? <PrivateRoutes /> : <PublicRoutes />}
          </Router>
      </ThemeProvider>
    );
}

export default App;
