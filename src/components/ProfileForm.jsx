import React, {Component} from 'react';
import { connect } from "react-redux"
import chip from "../images/chip.png"
import cardSign from "../images/card_sign.png"
import {saveCard} from "../actions/cardAction"
import {PropTypes} from "prop-types";
import '../css/Card.css';

let a=0;

class ProfileForm extends Component {
  state = {cardNumber:"", expiryDate:"", cardName:"", cvc: ""}

  changeCardNumber = (event) => {
    this.setState({cardNumber: event.target.value})
  }

  changeExpiryDate = (event) => {
    this.setState({expiryDate: event.target.value})
  }

  changeCardName = (event) => {
    this.setState({cardName: event.target.value})

  }

  changeCvc = (event) => {
    this.setState({cvc: event.target.value})

  }

  saveProfile = async (event) => {
    event.preventDefault();
    this.props.saveCard(this.state.cardNumber, this.state.expiryDate, this.state.cardName, this.state.cvc, this.props.token)
  }

  
  addSpace = (event) => {
    if (a===4) {
      a=0;
      event.target.value+=" ";
    } 
    a++;
  }

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
                      <input type="text" onChange={this.changeCardName} data-testid="Name"  id="name" className="Form__name  Form__input" name="Name"/>
                    </label>
                    <label className="Form__label" htmlFor="card-number">
                      <p className="Form__text Form__text--profile">Номер карты</p>
                      <input type="card" onChange={this.changeCardNumber} onKeyPress={this.addSpace} data-testid="card-number"  id="card-number" className="Form__card-number Form__input" name="password" />
                    </label>
                   <div className="Form__blocks-date-cvc">
                      <label className="Form__label Form__label--date" htmlFor="date">
                        <p className="Form__text Form__text--profile">MM.YY</p>
                        <input type="month"  onChange={this.changeExpiryDate} data-testid="date" id="date" className="Form__date Form__input" name="password" />
                      </label>
                      <label className="Form__label" htmlFor="CVC-code">
                        <p className="Form__text Form__text--profile">CVC</p>
                        <input type="text"  onChange={this.changeCvc} data-testid="CVC-code"  id="CVC-code" className="Form__CVC-code Form__input" name="password" />
                      </label>
                   </div>
                </div>
                <div className="Form__blocks-card" >
                  <div className="Card">
                    <div className="Card__block">
                      <img className="Card__block-image" src={cardSign} alt="card_sign"/>
                      <input type="text" value={this.state.expiryDate} placeholder="2020/01" className="Card__date-output" readOnly></input>
                    </div>
                    <input type="text" placeholder="5545 2300 3432 4521" value={this.state.cardNumber} className="Card__number-output" readOnly></input>
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

ProfileForm.propTypes = {
  saveCard: PropTypes.func,
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
  saveCard: (cardNumber, expiryDate, cardName, cvc) => dispatch(saveCard({cardNumber, expiryDate, cardName, cvc}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);