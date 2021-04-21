import { SAVE_ADDRESS } from "./addressAction";
import { SaveAddressActionType } from "./addressAction";

type InitialStateType = {
  addressList: null | Array<string>
  isAddressListUpload: boolean
}

const initialState: InitialStateType = {
  addressList: null,
  isAddressListUpload: false
}

export default function addressReducer(state = initialState, action: SaveAddressActionType): InitialStateType {
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