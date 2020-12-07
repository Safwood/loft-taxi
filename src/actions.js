export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATE = "AUTHENTICATE"
export const SAVECARD = "SAVECARD"
export const SAVECARDSUCCESS = "SAVECARDSUCCESS"

export const logIn = (token) => ({type: LOG_IN, payload: token});
export const logOut = () => ({type: LOG_OUT});
export const authenticate = ({email, password}) => ({type: AUTHENTICATE, payload: { email, password }})
export const saveCard = ({cardNumber, expiryDate, cardName, cvc}) => ({type: SAVECARD, payload: { cardNumber, expiryDate, cardName, cvc }})
export const saveCardSuccess = () => ({type: SAVECARDSUCCESS})