import { SAVE_CARD, SAVE_CARD_SUCCESS, GET_CARD_SUCCESS } from "./cardAction";
import { SaveCardActionType, SaveCardSuccessActionType, GetCardSuccessActionType } from "./cardAction";

type InitialStateType = {
  cardNumber?: string | null
  expiryDate?: string | null
  cardName?: string | null
  cvc?: string | null
  isCardSaved?: boolean
}


let initialState: InitialStateType = {
  cardNumber: null, 
  expiryDate: null, 
  cardName: null, 
  cvc: null,
  isCardSaved: false
}

export default function cardReducer(state = initialState, action: 
  SaveCardActionType |
  SaveCardSuccessActionType |
  GetCardSuccessActionType
  ): InitialStateType {

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
      return { 
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

// return {
//   ...state,
//   [action.payload.type]: {
//     ...state[action.payload.type],
//     [action.payload.todo]: action.payload.checked
//   }
// }
