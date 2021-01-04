import React from 'react';
import { connect } from "react-redux";
import { logInFailClose } from "../actions/logInAction"

const ErrorNotification = (props) => {
  return(
    <div className="Map-page Map-page--auth-error">
      <div className="Form-container Form-container--auth-error">
      <div className="Form">
        <div className="Form__notification-wrapper">
          <p className="Form__notification">
           {props.error}
          </p>
          <button onClick={props.closeError} className="Entry-button">Закрыть</button>
        </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  closeError: () => dispatch(logInFailClose({}))
})

export default connect(null, mapDispatchToProps)(ErrorNotification);