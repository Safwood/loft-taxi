export const GETROUTE = "GETROUTE"
export const SAVEROUTE = "SAVEROUTE"

export const getRoute = (address1, address2) => ({type: GETROUTE, payload: {address1, address2}})
export const saveRoute = (route) => ({type: SAVEROUTE, payload: route})