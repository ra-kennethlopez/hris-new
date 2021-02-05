export type LoginResponse = {
    status: {
        success: boolean;
        code: number;
    },
    sessionId: string;
};
