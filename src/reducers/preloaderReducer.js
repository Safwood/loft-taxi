import { PRELOADER_ON, PRELOADER_OFF } from "../actions/preloaderAction";

let initialState = {
  isPreloaderOn: false
}

export default function(state = initialState, action) {

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