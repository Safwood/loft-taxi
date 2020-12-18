import { recordSaga } from "./recordSaga"
import { registerSaga } from "./regSaga"
import { register } from "../actions/registerAction"

jest.mock("../serverFunctions/serverRegister", () => ({ serverRegister: () => ({success:true, token: '123'})}))

describe("registerSaga", () => {
  describe("#REGISTER", () => {
    it("registers though server", async () => {
      const dispatched = await recordSaga(
        registerSaga,
        register("email", "password", "name", "surname")
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