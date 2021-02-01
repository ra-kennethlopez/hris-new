import React, {useRef} from "react";
import {useStyles} from "./styles";
import Grid from "@material-ui/core/Grid";
import { TextFieldProps } from "@material-ui/core/TextField";
import LoginForm from "../../components/LoginForm";
import { useMachine } from "@xstate/react";
import loginManagerMachine from "../../machines/loginManager";
import {LoginEvent, LoginEventPayload} from "../../machines/login/types";
import {getValue} from "../../utils";

const Login: React.FC = () => {
    const classes = useStyles();
    const usernameRef = useRef<TextFieldProps>(null);
    const passwordRef = useRef<TextFieldProps>(null);

    const [loginManagerState, loginManagerSend] = useMachine(loginManagerMachine);
    const loginState = loginManagerState.context.loginRef?.state;
    const emptyUsername = loginState?.matches('error.emptyUsername');
    const emptyPassword = loginState?.matches('error.emptyPassword');
    const loginFail = loginState?.matches('error.fail');
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

    console.log("login manager state: ", loginManagerState);
    console.log("login state: ", loginManagerState.context.loginRef?.state);
    console.log(emptyUsername)

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
        </div>
    );
}

export default Login;
