import React, {Component} from 'react';
import { Link } from "react-router-dom"

class LoginNotification extends Component {

  render() {
    return (
      <div  className="Form-container">
        <form className="Form">
          <div className="Form__notification-wrapper">
          <h2 className="Form__heading">Войти</h2>
            <p className="Form__notification">
              Вы зарегистрированы.
            </p>
            <Link to="/map" className="Entry-button">Перейти на страницу карты</Link>
          </div>
          </form>
      </div>
    )
  }
}

export default LoginNotification;