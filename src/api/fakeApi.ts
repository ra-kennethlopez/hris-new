import {LoginResponse} from "./types";

// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
export const login = (username: string, password: string): Promise<LoginResponse> => {
    return new Promise<LoginResponse>((resolve, reject) => {
        setTimeout(() => {
            const response: LoginResponse = {
                status: {
                    success: true,
                    code: 1
                }
            }

            if (username === 'asd' && password === 'asd') {
                resolve(response);
            } else {
                reject(response)
            }
        }, 1000);
    });
}

// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
export const failLogin = (username: string, password: string): Promise<LoginResponse> => {
    return new Promise<LoginResponse>((_, reject) => {
        setTimeout(() => {
            const response: LoginResponse = {
                status: {
                    success: false,
                    code: 0
                }
            }

            reject(response);
        }, 1000);
    });
}