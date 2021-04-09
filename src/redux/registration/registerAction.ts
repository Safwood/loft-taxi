export const REGISTER = "registration/REGISTER"
export const register = (
  email: string, 
  password: string, 
  name: string, 
  surname: string) => ({type: REGISTER, payload: { email, password, name, surname}}  as const)
