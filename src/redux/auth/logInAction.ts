export const LOG_IN = "auth/LOG_IN"
export const LOG_IN_FAIL = "auth/LOG_IN_FAIL"
export const LOG_IN_FAIL_CLOSE = "auth/LOG_IN_FAIL_CLOSE"

export const logIn = (token: string) => ({type: LOG_IN, payload: token} as const);
export const logInFail = (error: string) => ({type: LOG_IN_FAIL, payload: error} as const);
export const logInFailClose = () => ({type: LOG_IN_FAIL_CLOSE} as const);
