export const GET_ROUTE = "route/GET_ROUTE"
export const SAVE_ROUTE = "route/SAVE_ROUTE"
export const SET_ROUTE_BUILT_FALSE = "route/SET_ROUTE_BUILT_FALSE"


export type GetRouteActionType = {
  type: typeof GET_ROUTE
  payload: {
    address1: string
    address2: string
  }
}
export type SetRouteBuiltFalseActionType = {
  type: typeof SET_ROUTE_BUILT_FALSE
}
export type SaveRouteActionType = {
  type: typeof SAVE_ROUTE
  payload?: Array<Array<number>>
}

export const getRoute = (
  address1: string, 
  address2: string): GetRouteActionType => ({type: GET_ROUTE, payload: {address1, address2}} as const)
export const saveRoute = (
  route: Array<Array<number>>): SaveRouteActionType => ({type: SAVE_ROUTE, payload: route} as const)
export const setRouteBuiltFalse = (): SetRouteBuiltFalseActionType => ({type: SET_ROUTE_BUILT_FALSE} as const)