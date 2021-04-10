import { LOG_IN  } from "./logInAction";
import { LOG_IN_FAIL  } from "./logInAction";
import { LOG_IN_FAIL_CLOSE  } from "./logInAction";
import { LOG_OUT  } from "./logOutAction";

type InitialStateType = {
  isLoggedIn: boolean
  token: string | null
  error: string | null
}

type ActionType = {
  type: string
  payload?: string
}

const initialState: InitialStateType = {
  isLoggedIn: false,
  token: null,
  error: null
}

export default function authReducer(state = initialState, action: ActionType) {
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