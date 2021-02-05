import {MachineConfig} from "xstate";
import {LoginContext, LoginEvent, LoginStateSchema} from "./types";

const config: MachineConfig<LoginContext, LoginStateSchema, LoginEvent> = {
    id: 'login',
    initial: 'idle',
    context: {
        username: '',
        password: '',
        errorMessage: ''
    },
    on: {
        LOGIN: {
            target: 'loading',
            actions: ['setUsername', 'setPassword']
        }
    },
    states: {
        idle: {},
        loading: {
            always: [
                {
                    target: 'error.emptyUsername',
                    cond: 'usernameEmpty'
                },
                {
                    target: 'error.emptyPassword',
                    cond: 'passwordEmpty'
                }
            ],
            invoke: {
                src: 'login',
                onDone: {
                    target: 'success',
                    actions: ['sendParentSuccessEvent']
                },
                onError: 'error.fail'
            }
        },
        success: {
            type: 'final'
        },
        error: {
            entry: ['sendParentErrorEvent'],
            initial: 'none',
            states: {
                none: {},
                emptyUsername: {
                    entry: ['setErrorMessageEmptyUsername']
                },
                emptyPassword: {
                    entry: ['setErrorMessageEmptyPassword']
                },
                fail: {
                    entry: ['setErrorMessageLoginFail']
                }
            }
        }
    }
}

export default config;
