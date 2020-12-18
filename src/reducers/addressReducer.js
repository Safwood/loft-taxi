import { SAVEADDRESS } from "../actions/addressAction";

const initialState = {
  addressList: null,
  isAddressListUpload: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SAVEADDRESS: {
      return {
        addressList: action.payload.addressList, 
        isAddressListUpload: true 
      }
    }
    default: 
      return state
  }
}