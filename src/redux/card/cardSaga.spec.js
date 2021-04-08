import { recordSaga } from "../recordSaga"
import { saveCardSaga } from "./cardSaga"
import { saveCard } from "./cardAction"

jest.mock("../serverFunctions/serverCard", () => ({ serverCard: () => ({success: true})}))

describe("saveCardSaga", () => {
  describe("#SAVE_CARD", () => {
    it("savesCardData", async () => {
      const dispatched = await recordSaga(
        saveCardSaga,
        saveCard("cardNumber", "expiryDate", "cardName", "cvc", "token")
      )
      expect(dispatched).toEqual([
        {
          type: "SAVE_CARD_SUCCESS"
        }
      ])
    })
  })
})