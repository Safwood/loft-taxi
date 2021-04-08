import { GET_CARD_SUCCESS } from "./cardAction";
import { SAVE_CARD, SAVE_CARD_SUCCESS } from "./cardAction";

let initialState = {
  cardNumber: null, 
  expiryDate: null, 
  cardName: null, 
  cvc: null,
  isCardSaved: false
}

export default function(state = initialState, action) {

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