import { recordSaga } from "../recordSaga"
import { getAddressListSaga } from "../addresses/addressSaga"
import { getAddress } from "../addresses/addressAction"

jest.mock("../serverFunctions/serverAddresses.js", () => ({ serverAddresses: () => ({addresses: ['123']})}))

describe("addressSaga", () => {
  describe("#GET_ADDRESS", () => {
    it("gets addresses from the server", async () => {
      const dispatched = await recordSaga(
        getAddressListSaga,
        getAddress()
      )
      expect(dispatched).toEqual([
        {
          payload: {addressList: ["123"]},
          type: "SAVE_ADDRESS"
        }
      ])
    })
  })
})