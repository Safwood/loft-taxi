import { SAVE_CARD, SAVE_CARD_SUCCESS, GET_CARD_SUCCESS, UPDATE_CARD } from "./cardAction";
import { SaveCardActionType, SaveCardSuccessActionType, GetCardSuccessActionType, UpdateCardActionType } from "./cardAction";

type InitialStateType = {
  cardNumber?: string | null
  expiryDate?: string | null
  cardName?: string | null
  cvc?: string | null
  isCardSaved?: boolean
  isCardUpdating?: boolean
}


let initialState: InitialStateType = {
  cardNumber: null, 
  expiryDate: null, 
  cardName: null, 
  cvc: null,
  isCardSaved: false,
  isCardUpdating: false
}

export default function cardReducer(state = initialState, action: 
  SaveCardActionType |
  SaveCardSuccessActionType |
  GetCardSuccessActionType |
  UpdateCardActionType
  ): InitialStateType {

  switch(action.type) {
    case SAVE_CARD: {
      return {
        cardNumber: action.payload.cardNumber, 
        expiryDate: action.payload.expiryDate, 
        cardName: action.payload.cardName, 
        cvc: action.payload.cvc,
        isCardSaved: state.isCardSaved,
        isCardUpdating: false
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
        ...state, isCardSaved: true
      }
    }
    case UPDATE_CARD: {
      return {
        ...state, isCardUpdating: true
      }
    }
    
    default: 
      return state
  }
}