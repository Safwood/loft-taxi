export const AUTHENTICATE = "auth/AUTHENTICATE"

export type AuthenticateActionType = {
  type: typeof AUTHENTICATE
  payload: {
    email: string
    password: string
  }
}

export const authenticate = (
  email: string, 
  password: string): AuthenticateActionType => 
  ({type: AUTHENTICATE, payload: { email, password }} as const)