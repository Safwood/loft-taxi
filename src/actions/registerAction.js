export const REGISTER = "REGISTRATE"
export const register = ({email, password, name, surname}) => ({type: REGISTER, payload: { email, password, name, surname}})
