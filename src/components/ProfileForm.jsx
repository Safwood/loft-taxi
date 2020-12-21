import React, {Component} from 'react';
import { connect } from "react-redux"
import chip from "../images/chip.png"
import cardSign from "../images/card_sign.png"
import {saveCard} from "../actions/cardAction"
import {PropTypes} from "prop-types";
import '../css/Card.css';
import { Formik, Form, ErrorMessage } from "formik";

let a=0;

class ProfileForm extends Component {
 
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
        <Formik
          initialValues = {{
            cardNumber: "", 
            expiryDate: "", 
            cardName: "", 
            cvc: ""
          }}
          onSubmit={values => {this.props.saveCard(values.cardNumber, values.expiryDate, values.cardName, values.cvc, this.props.token )}}
          validate={ values => {
            let errors = {};

            if (!values.cardNumber) {
              errors.cardNumber = "Поле 'Номер карты' должно быть заполнено"
            } else if(values.cardNumber.length < 12) {
              errors.cardNumber = "Номер карты должен состоять из не менее 12 цифр"
            } else if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(values.cardNumber)) {
              errors.cardNumber = "Номер карты должен состоять только из цифр"
            }

            if (!values.expiryDate) {
              errors.expiryDate = "Поле 'Дата' должно быть заполнено"
            }

            if (!values.cardName) {
              errors.cardName = "Поле 'Имя' должно быть заполнено"
            } else if (!/^[A-Z]+$/.test(values.cardName)) {
              errors.cardName = "Имя должно быть написано латинскими буквами"
            }

            if (!values.cvc) {
              errors.cvc = "Поле 'CVC' должно быть заполнено"
            } else if(values.cvc.length < 3) {
              errors.cvc = "CVC код должен состоять из не менее 3 цифр"
            } else if (!/^[0-9]+$/.test(values.cvc)) {
              errors.cvc = "CVC код должен состоять только из цифр"
            }

            return errors     
        }}
        > 
        
        {props => (
          <div className="Form-container Form-container--profile">
            <Form className="Form Form--profile">
              <h2 className="Form__heading Form__heading--profile">Профиль</h2>
              <p className="Form__subtitle">Введите платежные  данные</p>
              <div className="Form__content Form__content--profile">
                <div className="Form__blocks">
                  <div className="Form__blocks-inputs">
                      <label className="Form__label" htmlFor="cardName">
                        <p className="Form__text Form__text--profile">Имя владельца</p>
                        <input type="text" { ...props.getFieldProps("cardName")} data-testid="cardName" className="Form__name Form__input" id="cardName" name="cardName"/>
                        <ErrorMessage name="cardName" component="div" className="Form__error"/>
                      </label>
                      <label className="Form__label" htmlFor="cardNumber">
                        <p className="Form__text Form__text--profile">Номер карты</p>
                        <input type="card" { ...props.getFieldProps("cardNumber")} onKeyPress={this.addSpace} data-testid="cardNumber"  id="cardNumber" className="Form__card-number Form__input" name="cardNumber" />
                        <ErrorMessage name="cardNumber" component="div" className="Form__error"/>
                      </label>
                     <div className="Form__blocks-date-cvc">
                        <label className="Form__label Form__label--date" htmlFor="expiryDate">
                          <p className="Form__text Form__text--profile">MM.YY</p>
                          <input type="month" { ...props.getFieldProps("expiryDate")} data-testid="expiryDate" id="expiryDate" className="Form__date Form__input" name="expiryDate" />
                          <ErrorMessage name="expiryDate" component="div" className="Form__error"/>
                        </label>
                        <label className="Form__label" htmlFor="cvc">
                          <p className="Form__text Form__text--profile">CVC</p>
                          <input type="text" { ...props.getFieldProps("cvc")} maxLength="3" data-testid="cvc"  id="cvc" className="Form__CVC-code Form__input" name="cvc" />
                          <ErrorMessage name="cvc" component="div" className="Form__error"/>
                        </label>
                     </div>
                  </div>
                  <div className="Form__blocks-card" >
                    <div className="Card">
                      <div className="Card__block">
                        <img className="Card__block-image" src={cardSign} alt="card_sign"/>
                        <input type="text" value={props.values.expiryDate} placeholder="2020/01" className="Card__date-output" readOnly></input>
                      </div>
                      <input type="text" placeholder="5545 2300 3432 4521" value={props.values.cardNumber} className="Card__number-output" readOnly></input>
                      <div className="Card__block">
                        <img className="Card__block-image" src={chip} alt="card_sign"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" disabled={!props.values.cardName && !props.values.cardNumber && !props.values.expiryDate && !props.values.cvc && props.errors} className={"Login-form__button" + " " + "Entry-button"} value="Сохранить" />
            </Form>
            </div>
            )
          }
        </Formik>
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