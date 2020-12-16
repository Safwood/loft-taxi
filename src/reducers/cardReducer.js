import { SAVECARD, SAVECARDSUCCESS } from "../actions";

let initialState = {
  cardNumber: null, 
  expiryDate: null, 
  cardName: null, 
  cvc: null,
  isCardSaved: false
}

const user = JSON.parse(localStorage.getItem("allUsers"))

//if (localStorage) {
  //  initialState = 
  //  { cardNumber: user[0].cardData.cardNumber, 
  //    expiryDate: user[0].cardData.expiryDate, 
  //    cardName: user[0].cardData.cardName, 
  //    cvc: user[0].cardData.cvc,
  //    isCardSaved: true
  //  }
//}

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