import authReducer from './authReducer'
import {logIn, logOut} from '../actions'

describe("authReducer", () => {
  describe("#LOG_IN", () => {
    it('returns isLoggedIn true and saves token', () => {
      expect(authReducer({}, logIn({ token: "token"}))).toEqual({
        isLoggedIn: true,
      token: {
        token: "token"
      }})
    })
  })

  describe("#LOG_OUT", () => {
    it('returns isLoggedIn false', () => {
      expect(authReducer({}, logOut())).toEqual({isLoggedIn: false, token: null})
    })
  })
})