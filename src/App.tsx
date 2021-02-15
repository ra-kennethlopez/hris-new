import {ThemeProvider} from '@material-ui/core/styles';
import React, {useState} from 'react';
import {AppTheme} from './styles';
import {CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router} from 'react-router-dom'
import {isLoggedIn} from "./utils";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
    const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn());

    return (
      <ThemeProvider theme={AppTheme}>
          <CssBaseline />
          <Router>
              {userLoggedIn ? <PrivateRoutes /> : <PublicRoutes setUserLoggedIn={setUserLoggedIn} />}
          </Router>
      </ThemeProvider>
    );
}

export default App;
