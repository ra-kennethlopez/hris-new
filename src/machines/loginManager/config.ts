import {MachineConfig} from "xstate";
import {LoginManagerContext, LoginManagerEvent, LoginManagerStateSchema} from "./types";

const config: MachineConfig<LoginManagerContext, LoginManagerStateSchema, LoginManagerEvent> = {
    id: 'loginManager',
    type: 'parallel',
    context: {
        loginRef: undefined
    },
    states: {
        login: {
            id: 'login',
            initial: 'idle',
            states: {
                idle: {
                    always: {
                        actions: ['spawnLoginMachine'],
                        cond: 'loginRefUndefined'
                    },
                    on: {
                        'LOGIN': {
                            target: 'loading',
                            actions: ['sendEventToLogin']
                        }
                    }
                },
                loading: {
                    on: {
                        'LOGIN.SUCCESS': 'success',
                        'LOGIN.ERROR': 'idle'
                    }
                },
                success: {
                    type: 'final'
                }
            }
        }
    }
}

export default config;
