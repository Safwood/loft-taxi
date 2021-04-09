export const GET_ROUTE = "route/GET_ROUTE"
export const SAVE_ROUTE = "route/SAVE_ROUTE"
export const SET_ROUTE_BUILT_FALSE = "route/SET_ROUTE_BUILT_FALSE"

export const getRoute = (
  address1: string, 
  address2: string) => ({type: GET_ROUTE, payload: {address1, address2}} as const)
export const saveRoute = (
  route: Array<Array<number>>) => ({type: SAVE_ROUTE, payload: route} as const)
export const setRouteBuiltFalse = () => ({type: SET_ROUTE_BUILT_FALSE} as const)