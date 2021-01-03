import React from 'react';
import { connect } from "react-redux";
import { logInFailClose } from "../actions/logInAction"

const ErrorNotification = (props) => {
  return(
    <div className="Map-page">
      <div className="Form-container Form-container--auth-error">
      <form className="Form">
        <div className="Form__notification-wrapper">
          <p className="Form__notification">
           Ошибка авторизации.
          </p>
          <button onClick={props.closeError} className="Entry-button">Закрыть</button>
        </div>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  closeError: () => dispatch(logInFailClose({}))
})

export default connect(null, mapDispatchToProps)(ErrorNotification);