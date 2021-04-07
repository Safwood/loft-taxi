import {SAVEROUTE} from "../actions/routeAction"
import {SETROUTEBUILTFALSE} from "../actions/routeAction"

const initialState = {
  route: null,
  isRouteSaved: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVEROUTE: 
      return {
        route: action.payload,
        isRouteSaved: true
      }
    case SETROUTEBUILTFALSE: 
      return {
        route: null,
        isRouteSaved: false
      }
    default:
      return state
  } 
}
