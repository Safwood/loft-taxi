import { recordSaga } from "./recordSaga"
import { getAddressListSaga } from "./addressSaga"
import { getAddress } from "../actions/addressAction"

jest.mock("../serverFunctions/serverAddresses.js", () => ({ serverAddresses: () => ({addresses: ['123']})}))

describe("addressSaga", () => {
  describe("#GETADDRESS", () => {
    it("gets addresses from the server", async () => {
      const dispatched = await recordSaga(
        getAddressListSaga,
        getAddress()
      )
      expect(dispatched).toEqual([
        {
          payload: {addressList: ["123"]},
          type: "SAVEADDRESS"
        }
      ])
    })
  })
})