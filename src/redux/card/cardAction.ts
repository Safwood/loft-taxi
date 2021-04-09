export const GET_CARD = "card/GET_CARD"
export const GET_CARD_SUCCESS = "card/GET_CARD_SUCCESS"
export const SAVE_CARD = "card/SAVE_CARD"
export const SAVE_CARD_SUCCESS = "card/SAVE_CARD_SUCCESS"

export const getCard = (
  token: string) => ({type: GET_CARD, payload: token }  as const)
export const getCardSuccess = (
  cardNumber: string, 
  expiryDate: string, 
  cardName: string, 
  cvc: string) => ({type: GET_CARD_SUCCESS, payload: { cardNumber, expiryDate, cardName, cvc }} as const)
export const saveCard = (
  cardNumber: string, 
  expiryDate: string, 
  cardName: string, 
  cvc: string, 
  token: string) => ({type: SAVE_CARD, payload: { cardNumber, expiryDate, cardName, cvc, token }} as const)
export const saveCardSuccess = () => ({type: SAVE_CARD_SUCCESS} as const)
