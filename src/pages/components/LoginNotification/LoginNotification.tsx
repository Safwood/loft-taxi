import React from 'react';
import AppButton from '../Button/Button'

export const LoginNotification: React.FC = () => {
  return (
    <div  className="Form-container">
      <form className="Form">
        <div className="Form__notification-wrapper">
        <h2 className="Form__heading">Войти</h2>
          <p className="Form__notification">
            Вы зарегистрированы.
          </p>
          <AppButton link={"/map"} text={"Далее"} />
        </div>
        </form>
    </div>
  )
}

export default LoginNotification;