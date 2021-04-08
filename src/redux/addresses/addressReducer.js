import { SAVE_ADDRESS } from "./addressAction";

const initialState = {
  addressList: null,
  isAddressListUpload: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SAVE_ADDRESS: {
      return {
        addressList: action.payload.addressList, 
        isAddressListUpload: true 
      }
    }
    default: 
      return state
  }
}