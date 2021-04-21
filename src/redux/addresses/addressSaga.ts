import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ADDRESS, saveAddressList } from "./addressAction";
import { serverAddresses } from "../serverFunctions/serverAddresses";
import { GetAddressListSagaType } from "../../types";

export function* getAddressListSaga() {
  const data: GetAddressListSagaType = yield call(serverAddresses)
  yield put(saveAddressList(data.addresses))  
}

export function* addressSaga() {
  yield takeEvery(GET_ADDRESS, getAddressListSaga)
}