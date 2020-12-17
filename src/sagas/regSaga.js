import { takeEvery, call, put } from "redux-saga/effects";
import { REGISTER, logIn } from "../actions";
import { serverRegister } from "../serverFunctions/serverRegister";

export function* registerSaga(action) {
  const {email, password, name, surname} = action.payload;
  const data = yield call(serverRegister, email, password, name, surname)

  if (data.success) {
    yield put(logIn(data.token))
  }
}

export function* regSaga() {
  yield takeEvery(REGISTER, registerSaga)
}