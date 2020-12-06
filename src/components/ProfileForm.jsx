import React, {Component} from 'react';
import chip from "../images/chip.png"
import cardSign from "../images/card_sign.png"
import cardSign2 from "../images/card_sign2.svg"
import {PropTypes} from "prop-types";



class ProfileForm extends Component {

  //componentDidMount() {
  //  saveData = (name, cardNumber, date, cvcCode) => {
  //    return fetch(`https://loft-taxi.glitch.me/card`)
  //    .then(res => res.json()).then(data => data.success)
  //  }

  //  saveProfile = async (event) => {
  //    event.preventDefault();
  //    const {name, cardNumber, date, cvcCode} = event.target;
 //     await saveData(name.value, cardNumber.value, date.value, cvcCode.value)
  //  }
  //}


  render() {
    return(
     <div className="Profile-page">
        <div className="Form-container Form-container--profile">
          <form onSubmit={this.saveProfile} className="Form Form--profile">
            <h2 className="Form__heading Form__heading--profile">Профиль</h2>
            <p className="Form__subtitle">Введите платежные  данные</p>
            <div className="Form__content Form__content--profile">
              <div className="Form__blocks">
                <div className="Form__blocks-inputs">
                    <label className="Form__label" htmlFor="name">
                      <p className="Form__text Form__text--profile">Имя владельца</p>
                      <input type="text" data-testid="Name"  id="name" className="Form__name  Form__input" name="Name"/>
                    </label>
                    <label className="Form__label" htmlFor="card-number">
                      <p className="Form__text Form__text--profile">Номер карты</p>
                      <input type="card" data-testid="card-number"  id="card-number" className="Form__card-number Form__input" name="password" />
                    </label>
                   <div className="Form__blocks-date-cvc">
                      <label className="Form__label Form__label--date" htmlFor="date">
                        <p className="Form__text Form__text--profile">MM.YY</p>
                        <input type="date" data-testid="date" id="date" className="Form__date Form__input" name="password" />
                      </label>
                      <label className="Form__label" htmlFor="CVC-code">
                        <p className="Form__text Form__text--profile">CVC</p>
                        <input type="text" data-testid="CVC-code"  id="CVC-code" className="Form__CVC-code Form__input" name="password" />
                      </label>
                   </div>
                </div>
                <div className="Form__blocks-card" >
                  <div className="Card">
                    <div className="Card__block">
                      <img className="Card__block-image" src={cardSign} alt="card_sign"/>
                      <input type="text" value="" placeholder="14/12" className="Card__date-output" readOnly></input>
                    </div>
                    <input type="text" placeholder="5545 2300 3432 4521" value="" className="Card__number-output" readOnly></input>
                    <div className="Card__block">
                      <img className="Card__block-image" src={chip} alt="card_sign"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="submit" className="Login-form__button Entry-button" value="Сохранить" />
          </form>
        </div>
     </div>
    )
  }
}

export default ProfileForm;