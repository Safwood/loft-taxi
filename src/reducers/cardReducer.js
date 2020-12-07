import { SAVECARD, SAVECARDSUCCESS } from "../actions";

const initialState = {
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