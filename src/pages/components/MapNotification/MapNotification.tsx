import React from 'react';
import './MapNotification.css'
import Notification from '../Notification/Notification'

export default function MapNotification() {
  return(
    <div className="MapNotification">
        <Notification 
          text={"Для заказа такси заполните платёжные данные в профиле."}
          heading={"Профиль"}
          buttonText={"Перейти в профиль"}
          link={"/profile"}/>
    </div>
  )
}