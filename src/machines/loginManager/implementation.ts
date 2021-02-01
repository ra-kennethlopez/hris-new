import {assign, MachineOptions, send, spawn} from "xstate";
import {LoginManagerContext, LoginManagerEvent} from "./types";
import loginMachine from "../login";
import {LoginContext, LoginEvent, LoginEventPayload} from "../login/types";

const implementation: MachineOptions<LoginManagerContext, any> = {
    actions: {
        spawnLoginMachine: assign({
            loginRef: (_) => spawn<LoginContext, LoginEvent>(loginMachine, 'login')
        }),
        sendLoginEventToLoginMachine: send((_, event: LoginManagerEvent<LoginEventPayload>) => ({...event}), {to: 'login'}),
    },
    services: {},
    guards: {
        loginRefUndefined: (context) => !context.loginRef
    },
    activities: {},
    delays: {}
}

export default implementation;