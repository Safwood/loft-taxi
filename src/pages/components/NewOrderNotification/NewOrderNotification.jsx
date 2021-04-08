import React, { useCallback} from 'react';
import { useDispatch } from 'react-redux';

const NewOrderNotification = () => {
  const dispatch = useDispatch();
  const setRouteBuildFalse = useCallback(() => dispatch({type: "route/SET_ROUTE_BUILT_FALSE"}), [dispatch])

  const handleClick = () => {
    setRouteBuildFalse()
  }
  
  return(
    <div className="Map-page Map-page--new-order">
      <div className="Form-container Form-container--new-order">
      <form className="Form Form--new-order">
        <div className="Form__notification-wrapper Form__notification-wrapper--new-order">
        <h2 className="Form__heading Form__heading--profile">Заказ размещен</h2>
          <p className="Form__notification">
           Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
          </p>
          <button className="Entry-button" onClick={handleClick}>Сделать новый заказ</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default NewOrderNotification;