export const GETROUTE = "GETROUTE"
export const SAVEROUTE = "SAVEROUTE"
export const SETROUTEBUILTFALSE = "SETROUTEBUILTFALSE"

export const getRoute = (address1, address2) => ({type: GETROUTE, payload: {address1, address2}})
export const saveRoute = (route) => ({type: SAVEROUTE, payload: route})
export const setRouteBuiltFalse = () => ({type: SETROUTEBUILTFALSE})