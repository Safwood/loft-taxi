export const REGISTER = "registration/REGISTER"

export type RegisterActionType = {
  type: typeof REGISTER
  payload: {
    email: string
    password: string
    name: string
    surname: string
  }
}

export const register = (
  email: string, 
  password: string, 
  name: string, 
  surname: string): RegisterActionType => ({type: REGISTER, payload: { email, password, name, surname}}  as const)
