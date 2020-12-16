export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"
export const AUTHENTICATE = "AUTHENTICATE"
export const SAVECARD = "SAVECARD"
export const SAVECARDSUCCESS = "SAVECARDSUCCESS"
export const REGISTER = "REGISTRATE"
export const GETADDRESS = "GETADDRESS"
export const SAVEADDRESS = "SAVEADDRESS"
export const GETROUTE = "GETROUTE"
export const SAVEROUTE = "SAVEROUTE"

export const logIn = (token) => ({type: LOG_IN, payload: token});
export const logOut = () => ({type: LOG_OUT});
export const authenticate = ({email, password}) => ({type: AUTHENTICATE, payload: { email, password }})
export const saveCard = ({cardNumber, expiryDate, cardName, cvc, token}) => ({type: SAVECARD, payload: { cardNumber, expiryDate, cardName, cvc, token }})
export const saveCardSuccess = () => ({type: SAVECARDSUCCESS})
export const register = ({email, password, name, surname}) => ({type: REGISTER, payload: { email, password, name, surname}})
export const getAddress = () => ({type: GETADDRESS})
export const saveAddressList = (addressList) => ({type: SAVEADDRESS, payload: {addressList}})
export const getRoute = (address1, address2) => ({type: GETROUTE, payload: {address1, address2}})
export const saveRoute = (route) => ({type: SAVEROUTE, payload: route})