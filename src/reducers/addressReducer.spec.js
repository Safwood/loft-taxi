import addressReducer from './addressReducer'
import {getAddress} from '../actions'

describe("addressReducer", () => {
    it('returns isAddressListUpload true', () => {
      expect(addressReducer({}, getAddress())).toEqual({isAddressListUpload: true})
    })
})