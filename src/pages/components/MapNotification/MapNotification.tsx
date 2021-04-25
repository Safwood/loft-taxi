import React from 'react';
import AppButton from '../Button/Button'

const MapNotification: React.FC = () => {
  return(
    <div className="Map-page">
      <div className="Form-container Form-container--profile">
      <form className="Form">
        <div className="Form__notification-wrapper">
        <h2 className="Form__heading Form__heading--profile">Профиль</h2>
          <p className="Form__notification">
          Для заказа такси заполните платёжные данные в профиле. 
          </p>
          <AppButton link={"/profile"} text={"Перейти в профиль"} />
        </div>
        </form>
      </div>
    </div>
  )
}

export default MapNotification;