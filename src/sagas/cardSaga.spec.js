import { recordSaga } from "./recordSaga"
import { saveCardSaga } from "./cardSaga"
import { saveCard } from "../actions/cardAction"

jest.mock("../serverFunctions/serverCard", () => ({ serverCard: () => ({success: true})}))

describe("saveCardSaga", () => {
  describe("#SAVECARD", () => {
    it("savesCardData", async () => {
      const dispatched = await recordSaga(
        saveCardSaga,
        saveCard("cardNumber", "expiryDate", "cardName", "cvc", "token")
      )
      expect(dispatched).toEqual([
        {
          type: "SAVECARDSUCCESS"
        }
      ])
    })
  })
})