import React, {Component} from 'react';
import { Link } from "react-router-dom"

const MapNotification = () => {
  return(
    <div className="Map-page">
      <div className="Form-container Form-container--profile">
      <form className="Form">
        <div className="Form__notification-wrapper">
        <h2 className="Form__heading Form__heading--profile">Профиль</h2>
          <p className="Form__notification">
          Для заказа такси заполните платёжные данные в профиле. 
          </p>
          <Link to="/profile" className="Entry-button">Перейти в профиль</Link>
        </div>
        </form>
      </div>
    </div>
  )
}

export default MapNotification;