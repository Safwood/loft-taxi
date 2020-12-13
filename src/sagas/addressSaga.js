import { takeEvery, call, put, fork } from "redux-saga/effects";
import { GETADDRESS, saveAddressList } from "../actions";
import { serverAddresses } from "../serverFunctions/serverAddresses";

export function* getAddressListSaga(action) {
  console.log(action)
  const data = yield call(serverAddresses)
  console.log(data)
  yield put(saveAddressList(data.addresses))  
}

export function* addressSaga() {
  console.log(true)
  yield takeEvery(GETADDRESS, getAddressListSaga)
}