import { takeEvery, call, put } from "redux-saga/effects";
import { serverGetCard } from "../serverFunctions/serverGetCard"
import { GET_CARD, getCardSuccess } from "./cardAction";

export function* getCardDataSaga(action) {
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
  
 const token = action.payload;

  const data = yield call (serverGetCard, token);

  if (data.success) {
    yield put(getCardSuccess(data))
  }

}

export function* getCardSaga() {
  yield takeEvery(GET_CARD, getCardDataSaga) 
}