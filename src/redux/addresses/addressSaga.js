import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ADDRESS, saveAddressList } from "./addressAction";
import { serverAddresses } from "../serverFunctions/serverAddresses";

export function* getAddressListSaga(action) {
  const data = yield call(serverAddresses)
  yield put(saveAddressList(data.addresses))  
}

export function* addressSaga() {
  yield takeEvery(GET_ADDRESS, getAddressListSaga)
}