import { recordSaga } from "./recordSaga"
import { getCardDataSaga } from "./getCardSaga"
import { getCard } from "../actions/cardAction"

jest.mock("../serverFunctions/serverGetCard", () => ({ serverGetCard: () => ({cardNumber: "vv", expiryDate: "vv", cardName: "vv", cvc: "vv"})}))

describe("getCardDataSaga", () => {
  describe("#GETCARD", () => {
    it("getsCardData", async () => {
      const dispatched = await recordSaga(
        getCardDataSaga,
        getCard("token")
      )
      expect(dispatched).toEqual([
        {
          payload:{
            cardNumber: "vv", 
            expiryDate: "vv", 
            cardName: "vv", 
            cvc: "vv"
          },
          type: "GETCARDSUCCESS"
        }
      ])
    })
  })
})