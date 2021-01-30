import React, {useRef} from "react";
import {useStyles} from "./styles";
import Grid from "@material-ui/core/Grid";
import { TextFieldProps } from "@material-ui/core/TextField";
import LoginForm from "../../components/LoginForm";

const Login: React.FC = () => {
    const classes = useStyles();
    const usernameRef = useRef<TextFieldProps>(null);
    const passwordRef = useRef<TextFieldProps>(null);

    const handleSignInClick = () => {
        console.log(usernameRef.current?.value)
        console.log(passwordRef.current?.value)
    }

    return (
        <div className={classes.root}>
            <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
                className={classes.grid}
            >
                <Grid item>
                    <LoginForm
                        className={classes.loginForm}
                        usernameRef={usernameRef}
                        passwordRef={passwordRef}
                        onSignInClick={handleSignInClick}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
