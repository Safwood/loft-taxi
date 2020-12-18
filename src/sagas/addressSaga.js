import { takeEvery, call, put } from "redux-saga/effects";
import { GETADDRESS, saveAddressList } from "../actions/addressAction";
import { serverAddresses } from "../serverFunctions/serverAddresses";

export function* getAddressListSaga(action) {
  const data = yield call(serverAddresses)
  yield put(saveAddressList(data.addresses))  
}

export function* addressSaga() {
  yield takeEvery(GETADDRESS, getAddressListSaga)
}