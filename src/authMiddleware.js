import { serverLogin } from "./api"
import { AUTHENTICATE, logIn } from "./actions"

export const authMiddleware = (store) => (next) => async (action) => {
  console.log(action.type)
  if(action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const data = await serverLogin(email, password);
    console.log(data)
    if(data.success) {
       store.dispatch(logIn(data.token))
    } 
  }

  return next(action)
}