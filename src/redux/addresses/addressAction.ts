export const GET_ADDRESS = "address/GET_ADDRESS"
export const SAVE_ADDRESS = "address/SAVE_ADDRESS"

export const getAddress = () => ({type: GET_ADDRESS}  as const)
export const saveAddressList = (addressList: Array<string>) => ({type: SAVE_ADDRESS, payload: {addressList}} as const)