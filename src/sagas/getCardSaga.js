import { takeEvery, call, put } from "redux-saga/effects";
import { serverGetCard } from "../serverFunctions/serverGetCard"
import { GETCARD, getCardSuccess } from "../actions";

export function* getCardDataSaga(action) {
   //let user = {
    //token: action.payload.token, 
    //cardData:
    //  {
    //    cardNumber: action.payload.cardNumber,
    //    expiryDate: action.payload.expiryDate,
    //    cardName: action.payload.cardName,
    //    cvc: action.payload.cvc
    //  }
  //}

 // let allUsers = [];
 // allUsers.push(user);

 // localStorage.setItem('allUsers', JSON.stringify(allUsers));
  
 const token = action.payload;

  const data = yield call (serverGetCard, token);

  console.log(data.cardNumber)
  console.log(data.expiryDate)
  console.log(data.cardName)
  console.log(data.cvc)

  yield put(getCardSuccess(data.cardNumber, data.expiryDate, data.cardName, data.cvc))

}

export function* getCardSaga() {
  yield takeEvery(GETCARD, getCardDataSaga) 
}