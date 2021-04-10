import { PRELOADER_ON, PRELOADER_OFF } from "./preloaderAction";

type InitialStateType = {
  isPreloaderOn: boolean
}

type ActionType = {
  type: string
}

let initialState: InitialStateType = {
  isPreloaderOn: false
}

export default function preloaderReducer(state = initialState, action: ActionType) {

  switch(action.type) {
    case PRELOADER_ON: {
      return {
        isPreloaderOn: true
      }
    }
    case PRELOADER_OFF: {
      return{ 
        isPreloaderOn: false 
      }
    }
        
    default: 
      return state
  }
}