import {SAVE_ROUTE} from "./routeAction"
import {SET_ROUTE_BUILT_FALSE} from "./routeAction"

type InitialStateType = {
  route: Array<Array<number>> | null,
  isRouteSaved: boolean
}

type ActionType = {
  type: string
  payload?: Array<Array<number>>
}

const initialState: InitialStateType = {
  route: null,
  isRouteSaved: false
}

export default function routeReducer(state = initialState, action: ActionType) {
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
