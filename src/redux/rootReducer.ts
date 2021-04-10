import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import cardReducer from "./card/cardReducer";
import addressReducer from "./addresses/addressReducer";
import routeReducer from "./route/routeReducer";
import preloaderReducer from "./preloader/preloaderReducer";

const rootReducer = combineReducers({
  auth: authReducer, 
  card: cardReducer, 
  address: addressReducer, 
  route: routeReducer, 
  loader: preloaderReducer});
  
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;