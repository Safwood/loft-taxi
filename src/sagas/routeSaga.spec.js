import { recordSaga } from "./recordSaga"
import { getRouteSaga } from "./routeSaga"
import { getRoute } from "../actions/routeAction"

jest.mock("../serverFunctions/serverRoute", () => ({ serverRoute: () => (["route"])}))

describe("getRouteSaga", () => {
  describe("#SAVECARD", () => {
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
          type: "SAVEROUTE"
        }
      ])
    })
  })
})