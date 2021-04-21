import {SET_ROUTE_BUILT_FALSE, SAVE_ROUTE} from "./routeAction"
import {SetRouteBuiltFalseActionType, SaveRouteActionType} from "./routeAction"

type InitialStateType = {
  route?: Array<Array<number>> | null,
  isRouteSaved: boolean
}

const initialState: InitialStateType = {
  route: null,
  isRouteSaved: false
}

export default function routeReducer(state = initialState, action: 
  SetRouteBuiltFalseActionType | 
  SaveRouteActionType): InitialStateType {
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
