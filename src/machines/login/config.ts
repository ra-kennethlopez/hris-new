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
                onDone: 'success',
                onError: 'error.fail'
            }
        },
        success: {
            entry: ['sendParentSuccessEvent'],
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