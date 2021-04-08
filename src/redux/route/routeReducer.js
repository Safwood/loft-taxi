import {SAVE_ROUTE} from "./routeAction"
import {SET_ROUTE_BUILT_FALSE} from "./routeAction"

const initialState = {
  route: null,
  isRouteSaved: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_ROUTE: 
      return {
        route: action.payload,
        isRouteSaved: true
      }
    case SET_ROUTE_BUILT_FALSE: 
      return {
        route: null,
        isRouteSaved: false
      }
    default:
      return state
  } 
}
