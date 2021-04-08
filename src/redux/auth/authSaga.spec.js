import { recordSaga } from "../recordSaga"
import { authenticateSaga } from "../auth/authSaga"
import { authenticate } from "../auth/authenticateAction"

jest.mock("../serverFunctions/api", () => ({ serverLogin: () => ({success:true, token: '123'})}))

describe("authSaga", () => {
  describe("#AUTHENTICATE", () => {
    it("authenticates through api", async () => {
      const dispatched = await recordSaga(
        authenticateSaga,
        authenticate("testLogin", "testPassword")
      )
      expect(dispatched).toEqual([
        {
          payload: "123",
          type: "LOG_IN"
        }
      ])
    })
  })
})