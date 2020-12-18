import { takeEvery, call, put } from "redux-saga/effects";
import { GETROUTE } from "../actions/routeAction";
import { saveRoute } from "../actions/routeAction";
import { serverRoute } from "../serverFunctions/serverRoute";

export function* getRouteSaga(action) {
  const address1 = action.payload.address1;
  const address2 = action.payload.address2;

  const data = yield call(serverRoute, address1, address2)
  
  yield put(saveRoute(data))
}

export function* routeSaga() {
  yield takeEvery(GETROUTE, getRouteSaga)
}