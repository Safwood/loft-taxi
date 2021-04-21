import { takeEvery, call, put } from "redux-saga/effects";
import { REGISTER } from "./registerAction";
import { logIn } from "../auth/logInAction";
import { serverRegister } from "../serverFunctions/serverRegister";
import { preloaderOn, preloaderOff } from "../preloader/preloaderAction";
import { logInFail } from "../auth/logInAction";
import { RegisterActionType } from "./registerAction";
import { ServerLoginFunctonReponseType } from "../../types";

type PayloadType = {
  email: string, 
  password: string, 
  name: string, 
  surname: string
}

export function* registerSaga(action: RegisterActionType) {
  const {email, password, name, surname}: PayloadType = action.payload;

  yield put(preloaderOn())
  const data: ServerLoginFunctonReponseType = yield call(serverRegister, email, password, name, surname)
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