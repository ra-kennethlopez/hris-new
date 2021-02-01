import {LoginRef} from "../login/types";

export interface LoginManagerContext {
    loginRef?: LoginRef;
}

export type LoginManagerEvent<T = Object> = {
    type: 'LOGIN' | 'LOGIN.SUCCESS' | 'LOGIN.ERROR';
    payload: T;
}

export type LoginManagerStateSchema = {
    states: {
        login: {
            states: {
                idle: {},
                loading: {},
                success: {}
            }
        }
    }
}