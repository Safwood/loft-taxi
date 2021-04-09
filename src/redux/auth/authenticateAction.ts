export const AUTHENTICATE = "auth/AUTHENTICATE"
export const authenticate = (
  email: string, 
  password: string) => ({type: AUTHENTICATE, payload: { email, password }} as const)