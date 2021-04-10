import { GET_CARD_SUCCESS } from "./cardAction";
import { SAVE_CARD, SAVE_CARD_SUCCESS } from "./cardAction";

type InitialStateType = {
  cardNumber: string | null
  expiryDate: string | null
  cardName: string | null
  cvc: string | null
  isCardSaved: boolean
}

type ActionType = {
  type: string
  payload: {
    cardNumber?: string
    expiryDate?: string
    cardName?: string
    cvc?: string
    token?: string
  }
}

let initialState: InitialStateType = {
  cardNumber: null, 
  expiryDate: null, 
  cardName: null, 
  cvc: null,
  isCardSaved: false
}

export default function cardReducer(state = initialState, action: ActionType) {

  switch(action.type) {
    case SAVE_CARD: {
      return {
        cardNumber: action.payload.cardNumber, 
        expiryDate: action.payload.expiryDate, 
        cardName: action.payload.cardName, 
        cvc: action.payload.cvc,
        isCardSaved: state.isCardSaved
      }
    }
    case GET_CARD_SUCCESS: {
      return{ 
        cardNumber: action.payload.cardNumber, 
        expiryDate: action.payload.expiryDate, 
        cardName: action.payload.cardName, 
        cvc: action.payload.cvc,
        isCardSaved: true
      }
    }
    case SAVE_CARD_SUCCESS: {
      return {
        cardNumber: state.cardNumber, 
        expiryDate: state.expiryDate, 
        cardName: state.cardName, 
        cvc: state.cvc,
        isCardSaved: true
      }
    }
    
    default: 
      return state
  }
}