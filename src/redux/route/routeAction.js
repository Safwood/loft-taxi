export const GET_ROUTE = "route/GET_ROUTE"
export const SAVE_ROUTE = "route/SAVE_ROUTE"
export const SET_ROUTE_BUILT_FALSE = "route/SET_ROUTE_BUILT_FALSE"

export const getRoute = (address1, address2) => ({type: GET_ROUTE, payload: {address1, address2}})
export const saveRoute = (route) => ({type: SAVE_ROUTE, payload: route})
export const setRouteBuiltFalse = () => ({type: SET_ROUTE_BUILT_FALSE})