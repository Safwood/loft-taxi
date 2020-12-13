import { takeEvery, call, put } from "redux-saga/effects";
import { GETROUTE, getRoute } from "../actions";
import { serverLogin } from "../api";

export function* authenticateSaga(action) {
  const {email, password} = action.payload;
  const data = yield call(serverLogin, email, password)

  if (data.success) {
    yield put(logIn(data.token))
  }
}

export function* routeSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}