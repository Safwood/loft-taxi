import React from 'react';
import Notification from '../Notification/Notification'
import './LoginNotification.css'

export const LoginNotification: React.FC = () => {
  return (
    <div  className="LoginNotification">
        <Notification 
          text={"Вы зарегистрированы."}
          heading={"Войти"}
          buttonText={"Далее"}
          link={"/map"}/>
    </div>
  )
}

export default LoginNotification;