export const LOG_IN = "auth/LOG_IN"
export const LOG_IN_FAIL = "auth/LOG_IN_FAIL"
export const LOG_IN_FAIL_CLOSE = "auth/LOG_IN_FAIL_CLOSE"

export type LogInActionType = {
  type: typeof LOG_IN
  payload?: string
}
export type LoginFailActionType = {
  type: typeof LOG_IN_FAIL
  payload?: string
}
export type LogInFailCloseActionType = {
  type: typeof LOG_IN_FAIL_CLOSE
  payload?: string
}

export const logIn = (token: string): LogInActionType => ({type: LOG_IN, payload: token} as const);
export const logInFail = (error: string): LoginFailActionType => ({type: LOG_IN_FAIL, payload: error} as const);
export const logInFailClose = (): LogInFailCloseActionType => ({type: LOG_IN_FAIL_CLOSE} as const);
