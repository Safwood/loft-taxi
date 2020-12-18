import { GETCARDSUCCESS } from "../actions/cardAction";
import { SAVECARD, SAVECARDSUCCESS } from "../actions/cardAction";

let initialState = {
  cardNumber: null, 
  expiryDate: null, 
  cardName: null, 
  cvc: null,
  isCardSaved: false
}

export default function(state = initialState, action) {

  switch(action.type) {
    case SAVECARD: {
      return {
        cardNumber: action.payload.cardNumber, 
        expiryDate: action.payload.expiryDate, 
        cardName: action.payload.cardName, 
        cvc: action.payload.cvc,
        isCardSaved: state.isCardSaved
      }
    }
    case GETCARDSUCCESS: {
      return{ 
        cardNumber: action.payload.cardNumber, 
        expiryDate: action.payload.expiryDate, 
        cardName: action.payload.cardName, 
        cvc: action.payload.cvc,
        isCardSaved: true
      }
    }
    case SAVECARDSUCCESS: {
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