import React from 'react';
import car1 from '../images/car1.png';
import car2 from '../images/car2.png';
import car3 from '../images/car3.png';

const OrderCars = () => {
  return (
    <div className="Order-cars">
      <ul className="Order-cars__list">
        <li className="Order-cars__item">
          <input className="Order-cars__item-label" name="car" type="radio" id="car1"/>
          <label htmlFor="car1">
            <h3 className="Order-cars__heading">Стандарт</h3>
            <p className="Order-cars__cost">стоимость</p>
            <p className="Order-cars__price">150 ₽</p>
            <img className="Order-cars__image" src={car1} alt="car"/>
          </label>
        </li>
        <li className="Order-cars__item">
          <input className="Order-cars__item-label" name="car" type="radio" id="car2"/>
          <label htmlFor="car2">
            <h3 className="Order-cars__heading">Премиум</h3>
            <p className="Order-cars__cost">стоимость</p>
            <p className="Order-cars__price">250 ₽</p>
            <img className="Order-cars__image" src={car2} alt="car"/>
          </label>
        </li>
        <li className="Order-cars__item">
          <input className="Order-cars__item-label" name="car" type="radio" id="car3"/>
          <label htmlFor="car3">
            <h3 className="Order-cars__heading">Бизнес</h3>
            <p className="Order-cars__cost">стоимость</p>
            <p className="Order-cars__price">300 ₽</p>
            <img className="Order-cars__image" src={car3} alt="car"/>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default OrderCars;