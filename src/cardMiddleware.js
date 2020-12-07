import { serverCard } from "./serverCard"
import { SAVECARD } from "./actions"

export const CardMiddleware = (store) => (next) => async (action) => {
  
  if(action.type === SAVECARD) {
    const {cardNumber, expiryDate, cardName, cvc} = action.payload;
    const data = await serverCard(cardNumber, expiryDate, cardName, cvc);
    console.log(data)
    if(data.success) {
       //store.dispatch(logIn(data.token))
    } 
    else {
      return next(action)
    }
  }
}