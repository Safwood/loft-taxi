import { serverCard } from "./serverCard"
import { SAVECARD, saveCardSuccess } from "./actions";

//let storage = localStorage();

export const cardMiddleware = (store) => (next) => async (action) => {
  
  if(action.type === SAVECARD) {
    const state = store.getState()
    
    let user = {
      token: state.auth.token, 
      cardData:
        {
          cardNumber: action.payload.cardNumber,
          expiryDate: action.payload.expiryDate,
          cardName: action.payload.cardName,
          cvc: action.payload.cvc
        }
    }

    let allUsers = [];
    allUsers.push(user);

    localStorage.setItem('allUsers', JSON.stringify(allUsers));
    console.log(allUsers);

    const data = await serverCard(action.payload.cardNumber, action.payload.expiryDate, action.payload.cardName, action.payload.cvc, state.auth.token);

    if(data.success) {
      store.dispatch(saveCardSuccess())
     } 
  }

  return next(action)
}