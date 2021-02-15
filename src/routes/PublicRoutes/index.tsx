import React, {useEffect} from "react";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import {isLoggedIn} from "../../utils";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import {Props} from "./types";

const PublicRoutes: React.FC<Props> = ({setUserLoggedIn}) => {
    const location = useLocation();
    const history = useHistory();
    const userLoggedIn = isLoggedIn();
    useEffect(() => {
        setUserLoggedIn(userLoggedIn);
    }, [history, location, userLoggedIn])

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

export default PublicRoutes;
