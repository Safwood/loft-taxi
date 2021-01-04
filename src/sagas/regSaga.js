import { takeEvery, call, put } from "redux-saga/effects";
import { REGISTER } from "../actions/registerAction";
import { logIn } from "../actions/logInAction";
import { serverRegister } from "../serverFunctions/serverRegister";
import { preloaderOn, preloaderOff } from "../actions/preloaderAction";
import { logInFail } from "../actions/logInAction";


export function* registerSaga(action) {
  const {email, password, name, surname} = action.payload;

  yield put(preloaderOn())
  const data = yield call(serverRegister, email, password, name, surname)
  yield put(preloaderOff())

  if (data.success) {
    yield put(logIn(data.token))
  } else {
    yield put(logInFail(data.error))
  }
}

export function* regSaga() {
  yield takeEvery(REGISTER, registerSaga)
}