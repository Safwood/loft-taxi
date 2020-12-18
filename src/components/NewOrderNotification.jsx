import React from 'react';
import { Link } from "react-router-dom"

const NewOrderNotification = () => {
  return(
    <div className="Map-page">
      <div className="Form-container Form-container--profile">
      <form className="Form">
        <div className="Form__notification-wrapper Form__notification-wrapper--new-order">
        <h2 className="Form__heading Form__heading--profile">Заказ размещен</h2>
          <p className="Form__notification">
           Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
          </p>
          <Link to="/map" className="Entry-button">Сделать новый заказ</Link>
        </div>
        </form>
      </div>
    </div>
  )
}

export default NewOrderNotification;