import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import cardReducer from "./card/cardReducer";
import addressReducer from "./addresses/addressReducer";
import routeReducer from "./route/routeReducer";
import preloaderReducer from "./preloader/preloaderReducer";

export default combineReducers({auth: authReducer, card: cardReducer, address: addressReducer, route: routeReducer, loader: preloaderReducer});