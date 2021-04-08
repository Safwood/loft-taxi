export const GET_CARD = "card/GET_CARD"
export const GET_CARD_SUCCESS = "card/GET_CARD_SUCCESS"
export const SAVE_CARD = "card/SAVE_CARD"
export const SAVE_CARD_SUCCESS = "card/SAVE_CARD_SUCCESS"

export const getCard = ({token}) => ({type: GET_CARD, payload: token })
export const getCardSuccess = ({cardNumber, expiryDate, cardName, cvc}) => ({type: GET_CARD_SUCCESS, payload: { cardNumber, expiryDate, cardName, cvc }})
export const saveCard = ({cardNumber, expiryDate, cardName, cvc, token}) => ({type: SAVE_CARD, payload: { cardNumber, expiryDate, cardName, cvc, token }})
export const saveCardSuccess = () => ({type: SAVE_CARD_SUCCESS})
