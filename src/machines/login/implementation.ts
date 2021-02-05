import {assign, MachineOptions, sendParent} from "xstate";
import fakeApi from "../../api";
import {LoginContext, LoginEvent, LoginEventPayload, LoginResponseEvent} from "./types";

const implementation: MachineOptions<LoginContext, any> = {
    actions: {
        setUsername: assign({
            username: (_, event: LoginEvent<LoginEventPayload>) => event.payload.username
        }),
        setPassword: assign({
            password: (_, event: LoginEvent<LoginEventPayload>) => event.payload.password
        }),
        setErrorMessageEmptyUsername: assign({
            errorMessage: (_) => 'Please enter username.'
        }),
        setErrorMessageEmptyPassword: assign({
            errorMessage: (_) => 'Please enter password.'
        }),
        setErrorMessageLoginFail: assign({
            errorMessage: (_) => 'Failed to login, username or password is incorrect.'
        }),
        sendParentSuccessEvent: sendParent((_, event: LoginResponseEvent) => ({
            type: 'LOGIN.SUCCESS',
            payload: event.data
        })),
        sendParentErrorEvent: sendParent('LOGIN.ERROR'),
    },
    services: {
        login: ({username, password}) => fakeApi.login(username, password),
    },
    guards: {
        usernameEmpty: (context) => !context.username,
        passwordEmpty: (context) => !context.password,
    },
    activities: {},
    delays: {}
}

export default implementation;
