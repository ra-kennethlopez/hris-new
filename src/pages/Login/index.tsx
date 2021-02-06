import React, {useEffect, useRef} from "react";
import {useStyles} from "./styles";
import Grid from "@material-ui/core/Grid";
import { TextFieldProps } from "@material-ui/core/TextField";
import LoginForm from "../../components/LoginForm";
import { useMachine } from "@xstate/react";
import loginManagerMachine from "../../machines/loginManager";
import {LoginEvent, LoginEventPayload} from "../../machines/login/types";
import {getValue} from "../../utils";
import LoadingFull from "../../components/LoadingFull";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
    const classes = useStyles();
    const usernameRef = useRef<TextFieldProps>(null);
    const passwordRef = useRef<TextFieldProps>(null);

    const [loginManagerState, loginManagerSend] = useMachine(loginManagerMachine);
    const loginState = loginManagerState.context.loginRef?.state;
    const emptyUsername = loginState?.matches('error.emptyUsername');
    const emptyPassword = loginState?.matches('error.emptyPassword');
    const loginFail = loginState?.matches('error.fail');
    const loading = loginState?.matches('loading');
    const errorMessage = loginState?.context.errorMessage;

    const handleSignInClick = () => {
        const event: LoginEvent<LoginEventPayload> = {
            type: 'LOGIN',
            payload: {
                username: getValue(usernameRef),
                password: getValue(passwordRef)
            }
        }

        loginManagerSend(event);
    }

    const history = useHistory();
    const loginSuccess = loginState?.matches('success');
    useEffect(() => {
        if (loginSuccess) {
            history.replace('/');
            window.location.reload();
        }
    }, [loginSuccess, history]);

    console.log("login manager state: ", loginManagerState);
    console.log("login state: ", loginManagerState.context.loginRef?.state);

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
                        usernameError={emptyUsername ? errorMessage : ''}
                        passwordError={emptyPassword ? errorMessage : ''}
                        formError={loginFail ? errorMessage : ''}
                        onSignInClick={handleSignInClick}
                    />
                </Grid>
            </Grid>
            <LoadingFull show={!!loading} />
        </div>
    );
}

export default Login;
