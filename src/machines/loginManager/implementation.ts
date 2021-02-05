import {assign, MachineOptions, send, spawn} from "xstate";
import {LoginManagerContext, LoginManagerEvent} from "./types";
import loginMachine from "../login";
import {LoginContext, LoginEvent, LoginEventPayload} from "../login/types";
import {LoginResponse} from "../../api/types";
import store from "store2";

const implementation: MachineOptions<LoginManagerContext, any> = {
    actions: {
        spawnLoginMachine: assign({
            loginRef: (_) => spawn<LoginContext, LoginEvent>(loginMachine, 'login')
        }),
        storeSessionId: (_, event: LoginManagerEvent<LoginResponse>) => store.set('SESSION_ID', event.payload.sessionId),
        sendEventToLogin: send((_, event: LoginManagerEvent<LoginEventPayload>) => (event), {to: 'login'})
    },
    services: {},
    guards: {
        loginRefUndefined: (context) => !context.loginRef
    },
    activities: {},
    delays: {}
}

export default implementation;
