export const REGISTER = "registration/REGISTER"
export const register = ({email, password, name, surname}) => ({type: REGISTER, payload: { email, password, name, surname}})
