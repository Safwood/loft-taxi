export const LOG_OUT = "auth/LOG_OUT"

export type LogOutActionType = {
  type: typeof LOG_OUT
  payload?: string
}

export const logOut = (): LogOutActionType => ({type: LOG_OUT} as const);