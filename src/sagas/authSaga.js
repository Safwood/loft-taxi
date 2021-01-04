import { takeEvery, call, put } from "redux-saga/effects";
import { AUTHENTICATE } from "../actions/authenticateAction";
import { logIn } from "../actions/logInAction";
import { preloaderOn, preloaderOff } from "../actions/preloaderAction";
import { logInFail } from "../actions/logInAction";
import { serverLogin } from "../serverFunctions/api";

export function* authenticateSaga(action) {
  const {email, password} = action.payload;
  
  yield put(preloaderOn())
  const data = yield call(serverLogin, email, password)

  yield put(preloaderOff())

  if (data.success) {
    yield put(logIn(data.token))
  } else {
    yield put(logInFail(data.error))
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}