import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ROUTE, GetRouteActionType } from "./routeAction";
import { saveRoute } from "./routeAction";
import { serverRoute } from "../serverFunctions/serverRoute";

export function* getRouteSaga(action: GetRouteActionType) {
  const address1: string = action.payload.address1;
  const address2: string = action.payload.address2;

  const data: Array<Array<number>> = yield call(serverRoute, address1, address2)
  
  yield put(saveRoute(data))
}

export function* routeSaga() {
  yield takeEvery(GET_ROUTE, getRouteSaga)
}