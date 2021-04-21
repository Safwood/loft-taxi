import { fork } from "redux-saga/effects"
import { authSaga } from "./auth/authSaga"
import { cardSaga } from "./card/cardSaga"
import { regSaga } from "./registration/regSaga"
import { addressSaga } from "./addresses/addressSaga"
import { routeSaga } from "./route/routeSaga"
import { getCardSaga } from "./card/getCardSaga"

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(regSaga);
  yield fork(getCardSaga);
  yield fork(cardSaga);
  yield fork(addressSaga);
  yield fork(routeSaga);
}