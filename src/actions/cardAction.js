export const GETCARD = "GETCARD"
export const GETCARDSUCCESS = "GETCARDSUCCESS"
export const SAVECARD = "SAVECARD"
export const SAVECARDSUCCESS = "SAVECARDSUCCESS"

export const getCard = ({token}) => ({type: GETCARD, payload: token })
export const getCardSuccess = ({cardNumber, expiryDate, cardName, cvc}) => ({type: GETCARDSUCCESS, payload: { cardNumber, expiryDate, cardName, cvc }})
export const saveCard = ({cardNumber, expiryDate, cardName, cvc, token}) => ({type: SAVECARD, payload: { cardNumber, expiryDate, cardName, cvc, token }})
export const saveCardSuccess = () => ({type: SAVECARDSUCCESS})
