import {MachineConfig} from "xstate";
import {LoginManagerContext, LoginManagerEvent, LoginManagerStateSchema} from "./types";

const config: MachineConfig<LoginManagerContext, LoginManagerStateSchema, LoginManagerEvent> = {
    id: 'loginManager',
    type: 'parallel',
    states: {
        login: {
            id: 'login',
            initial: 'idle',
            states: {
                idle: {
                    on: {
                        'LOGIN': [
                            {
                                target: 'loading',
                                actions: ['spawnLoginMachine', 'sendEventToLogin'],
                                cond: 'loginRefUndefined'
                            },
                            {
                                target: 'loading',
                                actions: ['sendEventToLogin']
                            }
                        ]
                    }
                },
                loading: {
                    on: {
                        'LOGIN.SUCCESS': {
                            target: 'success',
                            actions: ['storeSessionId']
                        },
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
