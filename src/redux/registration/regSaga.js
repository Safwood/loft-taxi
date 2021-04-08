import { takeEvery, call, put } from "redux-saga/effects";
import { REGISTER } from "./registerAction";
import { logIn } from "../auth/logInAction";
import { serverRegister } from "../serverFunctions/serverRegister";
import { preloaderOn, preloaderOff } from "../preloader/preloaderAction";
import { logInFail } from "../auth/logInAction";


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