import {SAVEROUTE} from "../actions"

const initialState = {
  route: null
}

export default function (state = initialState, action) {
  console.log(action.payload)

  switch (action.type) {
    case SAVEROUTE: {
      return {
        route: action.payload
      }
    }
    default:
      return action
  } 
}