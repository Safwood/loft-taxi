import { takeEvery, call, put } from "redux-saga/effects";
import { AUTHENTICATE } from "../actions/authenticateAction";
import { logIn } from "../actions/logInAction";
import { serverLogin } from "../serverFunctions/api";

export function* authenticateSaga(action) {
  const {email, password} = action.payload;
  const data = yield call(serverLogin, email, password)

  if (data.success) {
    yield put(logIn(data.token))
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}