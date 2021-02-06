import {ThemeProvider} from '@material-ui/core/styles';
import React, {useEffect} from 'react';
import {AppTheme} from './styles';
import {CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router, matchPath, Route, Switch, useHistory, useLocation} from 'react-router-dom'
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
    useEffect(() => {
        const match = matchPath(location.pathname, {
            path: '/login',
            exact: true,
        });

        if (match?.isExact) {
            history.replace('/');
        }

    }, [history, location])


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
    const userLoggedIn = isLoggedIn();

    return (
      <ThemeProvider theme={AppTheme}>
          <CssBaseline />
          <Router>
              {userLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}
          </Router>
      </ThemeProvider>
    );
}

export default App;
