import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cardReducer from "./cardReducer";
import addressReducer from "./addressReducer";
import routeReducer from "./routeReducer";
import preloaderReducer from "./preloaderReducer";

export default combineReducers({auth: authReducer, card: cardReducer, address: addressReducer, route: routeReducer, loader: preloaderReducer});