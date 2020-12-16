import addressReducer from './addressReducer'
import {saveAddressList} from '../actions'

describe("addressReducer", () => {
    it('returns isAddressListUpload true', () => {
      expect(addressReducer({}, saveAddressList({addressList: "Москва"}))).toEqual({
        addressList: {
          addressList: "Москва"
        },
        isAddressListUpload: true})
    })
})