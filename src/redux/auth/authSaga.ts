import { takeEvery, call, put } from "redux-saga/effects";
import { AUTHENTICATE } from "./authenticateAction";
import { logIn } from "./logInAction";
import { preloaderOn, preloaderOff } from "../preloader/preloaderAction";
import { logInFail } from "./logInAction";
import { serverLogin } from "../serverFunctions/api";
import { AuthenticateActionType } from "./authenticateAction";
import { AuthFormValuesType, ServerLoginFunctonReponseType } from "../../types";

export function* authenticateSaga(action: AuthenticateActionType) {
  const {email, password}: AuthFormValuesType = action.payload;
  
  yield put(preloaderOn())
  const data: ServerLoginFunctonReponseType = yield call(serverLogin, email, password)

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