import cardReducer from './cardReducer'
import {saveCard, saveCardSuccess} from '../card/cardAction'

describe("cardReducer", () => {
  describe("#SAVE_CARD", () => {
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

  describe("#SAVE_CARD_SUCCESS", () => {
    it('returns isCardSaved true', () => {
      expect(cardReducer({}, saveCardSuccess({
        isCardSaved: true
      }))).toEqual({isCardSaved: true})
    })
  })
})