import React, {useCallback} from 'react';
import { useDispatch } from "react-redux";

const ErrorNotification = (props) => {
  const dispatch = useDispatch();
  const closeErrorNotification = useCallback(
    () => dispatch({type: 'auth/LOG_IN_FAIL_CLOSE'}),
    [dispatch]
  )

  const hangdleClick = () => {
    closeErrorNotification()
  }

  return(
    <div className="Map-page Map-page--auth-error">
      <div className="Form-container Form-container--auth-error">
      <div className="Form">
        <div className="Form__notification-wrapper">
          <p className="Form__notification">
           {props.error}
          </p>
          <button onClick={hangdleClick} className="Entry-button">Закрыть</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorNotification;