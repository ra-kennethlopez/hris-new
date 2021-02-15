import React, {useEffect} from "react";
import {matchPath, Route, Switch, useHistory, useLocation} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import NotFound from "../../pages/NotFound";

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

export default PrivateRoutes;
