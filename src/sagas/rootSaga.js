import { fork } from "redux-saga/effects"
import { authSaga } from "./authSaga"
import { cardSaga } from "./cardSaga"
import { regSaga } from "./regSaga"
import { addressSaga } from "./addressSaga"
import { routeSaga } from "./routeSaga"

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(regSaga);
  yield fork(cardSaga);
  yield fork(addressSaga);
  yield fork(routeSaga);
}