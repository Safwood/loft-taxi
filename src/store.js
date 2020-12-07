import { createStore, applyMiddleware } from "redux";
import  rootReducer  from "./reducers";
import  { authMiddleware } from "./authMiddleware";
import  { CardMiddleware } from "./cardMiddleware";
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(authMiddleware, CardMiddleware)));