import { LOG_IN  } from "../actions/logInAction";
import { LOG_OUT  } from "../actions/logOutAction";

const initialState = {
  isLoggedIn: false,
  token: null,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOG_IN: {
      return {isLoggedIn: true, token: action.payload}
    }
    case LOG_OUT: {
      return {isLoggedIn: false, token: null}
    }
    default: 
      return state
  }
}