import { takeEvery, call, put } from "redux-saga/effects";
import { serverGetCard } from "../serverFunctions/serverGetCard"
import { GET_CARD, getCardSuccess, GetActionType } from "./cardAction";
import { serverGetCardFunctonReponseType } from "../../types";

export function* getCardDataSaga(action: GetActionType) {
  const token: string = action.payload;
  
  const data: serverGetCardFunctonReponseType = yield call (serverGetCard, token);

  if (data.success) {
    yield put(getCardSuccess(data.cardNumber, data.expiryDate, data.cardName, data.cvc))
  }
}

export function* getCardSaga() {
  yield takeEvery(GET_CARD, getCardDataSaga) 
}