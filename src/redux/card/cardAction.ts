export const GET_CARD = "card/GET_CARD"
export const GET_CARD_SUCCESS = "card/GET_CARD_SUCCESS"
export const SAVE_CARD = "card/SAVE_CARD"
export const SAVE_CARD_SUCCESS = "card/SAVE_CARD_SUCCESS"

export type GetActionType = {
  type: typeof GET_CARD
  payload: string
}

export type SaveCardActionType = {
  type: typeof SAVE_CARD
  payload: {
    cardNumber?: string
    expiryDate?: string
    cardName?: string
    cvc?: string
    token?: string
  }
}
export type SaveCardSuccessActionType = {
  type: typeof SAVE_CARD_SUCCESS
}
export type GetCardSuccessActionType = {
  type: typeof GET_CARD_SUCCESS
  payload: {
    cardNumber?: string
    expiryDate?: string
    cardName?: string
    cvc?: string
    token?: string
  }
}

export const getCard = (
  token: string): GetActionType => ({type: GET_CARD, payload: token }  as const)
export const getCardSuccess = (
  cardNumber: string, 
  expiryDate: string, 
  cardName: string, 
  cvc: string): GetCardSuccessActionType => ({type: GET_CARD_SUCCESS, payload: { cardNumber, expiryDate, cardName, cvc }} as const)
export const saveCard = (
  cardNumber: string, 
  expiryDate: string, 
  cardName: string, 
  cvc: string, 
  token: string): SaveCardActionType => ({type: SAVE_CARD, payload: { cardNumber, expiryDate, cardName, cvc, token }} as const)
export const saveCardSuccess = (): SaveCardSuccessActionType => ({type: SAVE_CARD_SUCCESS} as const)
