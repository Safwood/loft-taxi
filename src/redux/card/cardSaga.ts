import { takeEvery, call, put } from "redux-saga/effects";
import { serverCard } from "../serverFunctions/serverCard"
import { SAVE_CARD, saveCardSuccess, SaveCardActionType } from "./cardAction";
import { ServerCardFunctonReponseType } from "../../types";

export function* saveCardSaga(action: SaveCardActionType) {

  const data: ServerCardFunctonReponseType = yield call(serverCard, action.payload.cardNumber, action.payload.expiryDate, action.payload.cardName, action.payload.cvc, action.payload.token);
  if(data.success) {
    yield put(saveCardSuccess())
  } 
}

export function* cardSaga() {
  yield takeEvery(SAVE_CARD, saveCardSaga) 
}