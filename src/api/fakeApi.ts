import {LoginResponse} from "./types";
import {v4 as uuid} from 'uuid';

export const login = (username: string, password: string): Promise<LoginResponse> => {
    return new Promise<LoginResponse>((resolve, reject) => {
        setTimeout(() => {
            const response: LoginResponse = {
                status: {
                    success: true,
                    code: 1
                },
                sessionId: ''
            }

            if ((username === 'asd' && password === 'asd') || (username === 'admin' && password === 'adminrss')) {
                response.sessionId = uuid();
                resolve(response);
            } else {
                reject(response)
            }
        }, 1000);
    });
}
