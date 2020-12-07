import { serverLogin } from "./api"
import { AUTHENTICATE, logIn } from "./actions"

export const authMiddleware = (store) => (next) => async (action) => {
  if(action.type === AUTHENTICATE) {
    
    const {email, password} = action.payload;
    const data = await serverLogin(email, password);
    if(data.success) {
       store.dispatch(logIn(data.token))
    } 
  }

  return next(action)
}