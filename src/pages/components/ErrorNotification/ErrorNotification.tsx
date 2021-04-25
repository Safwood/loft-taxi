import React, {useCallback} from 'react';
import { useDispatch } from "react-redux";
import AppButton from '../Button/Button'

type PropsType = {
  error: string
}

const ErrorNotification: React.FC<PropsType> = ({error}) => {
  const dispatch = useDispatch();
  const closeErrorNotification = useCallback(
    () => dispatch({type: 'auth/LOG_IN_FAIL_CLOSE'}),
    [dispatch]
  )

  const hangdleClick = (): void => {
    closeErrorNotification()
  }

  return(
    <div className="Map-page Map-page--auth-error">
      <div className="Form-container Form-container--auth-error">
      <div className="Form">
        <div className="Form__notification-wrapper">
          <p className="Form__notification">
           {error}
          </p>
          <AppButton onClick={hangdleClick} text={"Закрыть"} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorNotification;