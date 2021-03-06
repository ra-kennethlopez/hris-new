import {ActorRefFrom, StateMachine} from "xstate";
import {LoginResponse} from "../../api/types";

export interface LoginContext {
    username: string;
    password: string;
    errorMessage: string;
}

export type LoginEventPayload = {
    username: string;
    password: string;
}

export type LoginEvent<T = Object> = {
    type: 'LOGIN';
    payload: T;
}

export type LoginResponseEvent = {
    type: string;
    data: LoginResponse;
}

export type LoginStateSchema = {
    states: {
        idle: {},
        loading: {},
        success: {},
        error: {
            states: {
                none: {},
                emptyUsername: {},
                emptyPassword: {},
                fail: {}
            }
        }
    }
};

export type LoginRef = ActorRefFrom<StateMachine<LoginContext, LoginStateSchema, LoginEvent>>;
