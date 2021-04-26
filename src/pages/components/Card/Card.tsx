import React from 'react';
import './Card.css'
import chip from "../../../images/chip.png"
import cardSign from "../../../images/card_sign.png"

type CardPropsType = {
  expiryDate: string,
  cardNumber: string
}

export default function Card ({expiryDate, cardNumber}: CardPropsType) {
  return (
    <div className="Card">
      <div className="Card__block">
        <img className="Card__image" src={cardSign} alt="card_sign"/>
        <input  className="Card__date" type="text" value={expiryDate} placeholder="2020/01" readOnly></input>
      </div>
      <input className="Card__number" type="text" placeholder="5545 2300 3432 4521" value={cardNumber} readOnly></input>
      <div className="Card__block">
        <img className="Card__image" src={chip} alt="card_sign"/>
      </div>
    </div>
  )
}