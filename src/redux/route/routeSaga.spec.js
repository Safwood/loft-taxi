import { recordSaga } from "../recordSaga"
import { getRouteSaga } from "./routeSaga"
import { getRoute } from "./routeAction"

jest.mock("../serverFunctions/serverRoute", () => ({ serverRoute: () => (["route"])}))

describe("getRouteSaga", () => {
  describe("#SAVE_CARD", () => {
    it("savesCardData", async () => {
      const dispatched = await recordSaga(
        getRouteSaga,
        getRoute("address1", "address2")
      )
      expect(dispatched).toEqual([
        {
          payload:
            ["route"]
          ,
          type: "SAVE_ROUTE"
        }
      ])
    })
  })
})