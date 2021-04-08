import routeReducer from './routeReducer'
import {saveRoute} from './routeAction'

describe("routeReducer", () => {
  describe("#SAVEROUTE", () => {
    it('saves Route', () => {
      expect(routeReducer({}, saveRoute({route: "one"}))).toEqual({
          route: {
            route: "one"
          }
      })
    })
  })
})