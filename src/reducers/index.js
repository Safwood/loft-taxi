import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cardReducer from "./cardReducer";
import addressReducer from "./addressReducer";
import routeReducer from "./routeReducer";

export default combineReducers({auth: authReducer, card: cardReducer, address: addressReducer, route: routeReducer});