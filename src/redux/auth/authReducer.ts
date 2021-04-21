import { LOG_IN, LOG_IN_FAIL, LOG_IN_FAIL_CLOSE  } from "./logInAction";
import { LogInActionType, LoginFailActionType, LogInFailCloseActionType  } from "./logInAction";
import { LOG_OUT  } from "./logOutAction";
import { LogOutActionType  } from "./logOutAction";

type InitialStateType = {
  isLoggedIn: boolean
  token?: string | null
  error?: string | null
}

const initialState: InitialStateType = {
  isLoggedIn: false,
  token: null,
  error: null
}

export default function authReducer(state = initialState, action: 
  LogInActionType |
  LoginFailActionType |
  LogInFailCloseActionType |
  LogOutActionType): InitialStateType {
  switch(action.type) {
    case LOG_IN: {
      return {isLoggedIn: true, token: action.payload, error: null}
    }
    case LOG_OUT: {
      return {isLoggedIn: false, token: null, error: null}
    }
    case LOG_IN_FAIL: {
      return {isLoggedIn: false, error: action.payload}
    }
    case LOG_IN_FAIL_CLOSE: {
      return {isLoggedIn: false, error: null}
    }
    default: 
      return state
  }
}