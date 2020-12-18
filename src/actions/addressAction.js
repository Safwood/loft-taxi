export const GETADDRESS = "GETADDRESS"
export const SAVEADDRESS = "SAVEADDRESS"

export const getAddress = () => ({type: GETADDRESS})
export const saveAddressList = (addressList) => ({type: SAVEADDRESS, payload: {addressList}})