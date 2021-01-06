import React from 'react';

const NewOrderNotification = (props) => {
  return(
    <div className="Map-page Map-page--new-order">
      <div className="Form-container Form-container--new-order">
      <form className="Form Form--new-order" onSubmit={props.onSubmit}>
        <div className="Form__notification-wrapper Form__notification-wrapper--new-order">
        <h2 className="Form__heading Form__heading--profile">Заказ размещен</h2>
          <p className="Form__notification">
           Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
          </p>
          <button className="Entry-button">Сделать новый заказ</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default NewOrderNotification;