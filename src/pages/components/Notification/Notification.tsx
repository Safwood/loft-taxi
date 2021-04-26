import React from 'react';
import './Notificaton.css'
import AppButton from '../Button/Button'

type NotificationPropsType = {
  text: string
  heading: string
  buttonText: string
  onClick?: any
  link?: string
}

export default function Notification ({text, heading, buttonText, onClick, link}: NotificationPropsType) {
  const handleClick = ():void => {
    onClick()
  }
  return (
    <div className="Notification Form-container--new-order">
        <div className="Notification__content">
          <h2 className="Notification__heading">{heading}</h2>
          <p className="Notification__text">
          {text}
          </p>
          <AppButton onClick={onClick? handleClick : null} link={link} text={buttonText}/>
        </div>
    </div>
  )
}