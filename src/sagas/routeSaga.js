import { takeEvery, call, put } from "redux-saga/effects";
import { GETROUTE, saveRoute } from "../actions";
import { serverRoute } from "../serverFunctions/serverRoute";

export function* getRouteSaga(action) {
  const {address1, address2} = action.payload;
  const data = yield call(serverRoute, address1, address2)
  
  yield put(saveRoute(data))
}

export function* routeSaga() {
  yield takeEvery(GETROUTE, getRouteSaga)
}