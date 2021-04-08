import { takeEvery, call, put } from "redux-saga/effects";
import { serverCard } from "../serverFunctions/serverCard"
import { SAVE_CARD, saveCardSuccess } from "./cardAction";

export function* saveCardSaga(action) {
   let user = {
    token: action.payload.token, 
    cardData:
      {
        cardNumber: action.payload.cardNumber,
        expiryDate: action.payload.expiryDate,
        cardName: action.payload.cardName,
        cvc: action.payload.cvc
      }
  }

  let allUsers = [];
  allUsers.push(user);

  localStorage.setItem('allUsers', JSON.stringify(allUsers));

  const data = yield call (serverCard, action.payload.cardNumber, action.payload.expiryDate, action.payload.cardName, action.payload.cvc, action.payload.token);

  if(data.success) {
    yield put(saveCardSuccess())
  } 
}

export function* cardSaga() {
  yield takeEvery(SAVE_CARD, saveCardSaga) 
}