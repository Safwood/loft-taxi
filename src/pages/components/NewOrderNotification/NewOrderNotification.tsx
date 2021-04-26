import React, { useCallback} from 'react';
import { useDispatch } from 'react-redux';
import Notification from '../Notification/Notification'
import './NewOrderNotification.css'

const NewOrderNotification: React.FC = () => {
  const dispatch = useDispatch();
  const setRouteBuildFalse = useCallback(() => dispatch({type: "route/SET_ROUTE_BUILT_FALSE"}), [dispatch])

  const handleClick = ():void => {
    setRouteBuildFalse()
  }
  
  return(
    <div className="NewOrderNotification">
      <Notification 
      text={"Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут."}
      heading={"Заказ размещен"}
      buttonText={"Сделать новый заказ"}
      onClick={handleClick}/>
    </div>
  )
}

export default NewOrderNotification;