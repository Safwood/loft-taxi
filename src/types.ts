import * as AddressActions from "./redux/addresses/addressAction";
import * as AuthActions from "./redux/auth/authenticateAction";
import * as LoginActions from "./redux/auth/logInAction";
import * as LogoutActions from "./redux/auth/logOutAction";
import * as CardActions from "./redux/card/cardAction";
import * as PreloaderActions from "./redux/preloader/preloaderAction";
import * as RegistrationActions from "./redux/registration/registerAction";
import * as RouteActions from "./redux/route/routeAction";

// type ActionTypes = AddressActions |

export type AuthFormValuesType = {
  email: string
  password: string
  name?: string
  surname?: string
}
export type CardFormValuesType = {
  cardNumber: string 
  expiryDate: string 
  cardName: string 
  cvc: string
}
export type OrderFormValuesType = {
  address1: string 
  address2: string 
}
export type ServerLoginFunctonReponseType = {
  error: string 
  success: boolean
  token: string
}
export type ServerCardFunctonReponseType = {
  error: string 
  success: boolean
  token: string
}
export type serverGetCardFunctonReponseType = {
  cardNumber: string, 
  expiryDate: string, 
  cardName: string, 
  cvc: string,
  error: string 
  success: boolean
  token?: string
}

export type CardErrorsType = {
  cardNumber?: string 
  expiryDate?: string 
  cardName?: string 
  cvc?: string
}

export type GetAddressListSagaType = {
  addresses: Array<string>
}