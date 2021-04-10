import { SAVE_ADDRESS } from "./addressAction";

type InitialStateType = {
  addressList: null | Array<string>
  isAddressListUpload: boolean
}

type ActionType = {
  type: string
  payload: {
    addressList: Array<string>
  }
}

const initialState: InitialStateType = {
  addressList: null,
  isAddressListUpload: false
}

export default function addressReducer(state = initialState, action: ActionType) {
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