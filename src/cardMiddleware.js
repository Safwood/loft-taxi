import { serverCard } from "./serverCard"
import { SAVECARD, saveCardSuccess } from "./actions"

export const cardMiddleware = (store) => (next) => async (action) => {
  
  if(action.type === SAVECARD) {
    const state = store.getState()
    const data = await serverCard(action.payload.cardNumber, action.payload.expiryDate, action.payload.cardName, action.payload.cvc, state.auth.token);
    if(data.success) {
      store.dispatch(saveCardSuccess())
     } 
  }

  return next(action)
}