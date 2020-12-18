import cardReducer from './cardReducer'
import {saveCard, saveCardSuccess} from '../actions/cardAction'

describe("cardReducer", () => {
  describe("#SAVECARD", () => {
    it('saves CardData', () => {
      expect(cardReducer({}, saveCard({
        cardNumber: "0000000000000000",
        expiryDate: "2020/12", 
        cardName: "John",
        cvc: "555"
      }))).toEqual({
        cardNumber: "0000000000000000",
        expiryDate: "2020/12", 
        cardName: "John",
        cvc: "555"
      })
    })
  })

  describe("#SAVECARDSUCCESS", () => {
    it('returns isCardSaved true', () => {
      expect(cardReducer({}, saveCardSuccess({
        isCardSaved: true
      }))).toEqual({isCardSaved: true})
    })
  })
})