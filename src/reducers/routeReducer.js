import {SAVEROUTE} from "../actions"

const initialState = {
  route: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVEROUTE: {
      return {
        route: action.payload
      }
    }
    default:
      return state
  } 
}