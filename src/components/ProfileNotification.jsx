import React, {Component} from 'react';
import { Link } from "react-router-dom"


class ProfileNotification extends Component {
  render() {
    return(
      <div className="Profile-page">
        <div className="Form-container Form-container--profile">
        <form className="Form">
          <div className="Form__notification-wrapper">
          <h2 className="Form__heading Form__heading--profile">Профиль</h2>
            <p className="Form__notification">
            Платёжные данные обновлены. Теперь вы можете заказывать такси.
            </p>
            <Link to="/map" className="Entry-button">Перейти на карту</Link>
          </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ProfileNotification;