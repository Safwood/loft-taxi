import { GETADDRESS, SAVEADDRESS } from "../actions";

const initialState = {
  addressList: null, 
  isAddressListUpload: false
}

export default function(state = initialState, action) {
  console.log(action.payload)
  switch(action.type) {
    case SAVEADDRESS: {
      return {
        addressList: action.payload, 
        isAddressListUpload: true
      }
    }
    default: 
      return state
  }
}