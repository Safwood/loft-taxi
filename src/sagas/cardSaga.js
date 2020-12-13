import { takeEvery, call, put, select } from "redux-saga/effects";
import { serverCard } from "../serverFunctions/serverCard"
import { SAVECARD, saveCardSuccess } from "../actions";

export const token = (state) => {
  return state.auth.token
};

export function* saveCardSaga(action) {
  //const state = store.getState()
    
  const token = yield select(token)
  console.log(token)

  let user = {
    token: token, 
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

  const data = yield call (serverCard, action.payload.cardNumber, action.payload.expiryDate, action.payload.cardName, action.payload.cvc, "rec5jE3JjG9KSvRKX");
  console.log(data)

  if(data.success) {
    yield put(saveCardSuccess())
  } 
}

export function* cardSaga() {
  yield takeEvery(SAVECARD, saveCardSaga) 
}