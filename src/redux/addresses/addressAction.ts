export const GET_ADDRESS = "address/GET_ADDRESS"
export const SAVE_ADDRESS = "address/SAVE_ADDRESS"

export type SaveAddressActionType = {
  type: typeof SAVE_ADDRESS
  payload: {
    addressList: Array<string> 
  }
}

export const getAddress = () => ({type: GET_ADDRESS}  as const)
export const saveAddressList = (addressList: Array<string>): SaveAddressActionType => ({type: SAVE_ADDRESS, payload: {addressList}} as const)