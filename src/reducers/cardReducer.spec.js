import cardReducer from './cardReducer'
import {saveCard, saveCardSuccess} from '../actions'

describe("cardReducer", () => {
  describe("#SAVECARD", () => {
    it('returns isLoggedIn true', () => {
      expect(cardReducer({}, saveCard())).toEqual({isCardSaved: false})
    })
  })

  describe("#SAVECARDSUCCESS", () => {
    it('returns isLoggedIn false', () => {
      expect(cardReducer({}, saveCardSuccess())).toEqual({isCardSaved: true})
    })
  })
})