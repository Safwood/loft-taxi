import React, {useCallback} from 'react';
import { useDispatch } from "react-redux";
import Notification from '../Notification/Notification'
import './ErrorNotification.css'


type ErrorNotificationPropsType = {
  error: string
}

function ErrorNotification ({error}: ErrorNotificationPropsType) {
  const dispatch = useDispatch();
  const closeErrorNotification = useCallback(
    () => dispatch({type: 'auth/LOG_IN_FAIL_CLOSE'}),
    [dispatch]
  )

  const handleClick = (): void => {
    closeErrorNotification()
  }

  return(
    <div className="ErrorNotification">
      <Notification 
      text={error}
      heading={"Ошибка"}
      buttonText={"Закрыть"}
      onClick={handleClick}/>
    </div>
  )
}

export default ErrorNotification;