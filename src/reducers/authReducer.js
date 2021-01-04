import { LOG_IN  } from "../actions/logInAction";
import { LOG_IN_FAIL  } from "../actions/logInAction";
import { LOG_IN_FAIL_CLOSE  } from "../actions/logInAction";
import { LOG_OUT  } from "../actions/logOutAction";

const initialState = {
  isLoggedIn: false,
  token: null,
  hasAuthError: null,
  error: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOG_IN: {
      return {isLoggedIn: true, token: action.payload, hasAuthError: null}
    }
    case LOG_OUT: {
      return {isLoggedIn: false, token: null, hasAuthError: null}
    }
    case LOG_IN_FAIL: {
      return {isLoggedIn: false, hasAuthError: action.payload}
    }
    case LOG_IN_FAIL_CLOSE: {
      return {isLoggedIn: false, hasAuthError: null}
    }
    default: 
      return state
  }
}