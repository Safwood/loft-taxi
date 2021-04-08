import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux"
import chip from "../../../images/chip.png"
import cardSign from "../../../images/card_sign.png"
import './Card.css';
import { Formik, Form } from "formik";
import Input from "../Input/Input"

let a=0;

export const ProfileForm = (props) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const saveCard = useCallback((cardNumber, expiryDate, cardName, cvc) => dispatch({type: "SAVE_CARD", payload: { cardNumber, expiryDate, cardName, cvc, token }}), [dispatch, token])
 
  const addSpace = (event) => {
    if (a===4) {
      a=0;
      event.target.value+=" ";
    } 
    a++;
  }

  let initialValues = {
    cardNumber: "", 
    expiryDate: "", 
    cardName: "", 
    cvc: ""
  }

  const validate = values => {
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
      errors.cardName = "Имя должно быть написано заглавными латинскими буквами"
    }

    if (!values.cvc) {
      errors.cvc = "Поле 'CVC' должно быть заполнено"
    } else if(values.cvc.length < 3) {
      errors.cvc = "CVC код должен состоять из не менее 3 цифр"
    } else if (!/^[0-9]+$/.test(values.cvc)) {
      errors.cvc = "CVC код должен состоять только из цифр"
    }

    return errors     
  }

  const onSubmit= values => {
    saveCard(values.cardNumber, values.expiryDate, values.cardName, values.cvc, token )
  }

  return(
    <div className="Profile-page">
      <Formik
        initialValues = {initialValues}
        onSubmit={onSubmit}
        validate={validate}
        handleChange={addSpace}
      > 
      {props => (
        <div className="Form-container Form-container--profile">
          <Form className="Form Form--profile">
            <h2 className="Form__heading Form__heading--profile">Профиль</h2>
            <p className="Form__subtitle">Введите платежные  данные</p>
            <div className="Form__content Form__content--profile">
              <div className="Form__blocks">
                <div className="Form__blocks-inputs">
                  <Input inputType="text" inputName="cardName" inputText="Имя владельца" placeholder="ALEXANDER IVANOV"  errors={props.errors.cardName} onBlur={props.handleBlur} onChange={props.handleChange}/>
                  <Input inputType="card" onKeyPress={addSpace} inputName="cardNumber" maxLength="12" inputText="Номер карты" placeholder="5555 5555 5555 5555"  errors={props.errors.cardNumber} onBlur={props.handleBlur} onChange={props.handleChange} />
                  <div className="Form__blocks-date-cvc">
                    <Input inputType="month" inputName="expiryDate" inputText="MM.YY" errors={props.errors.expiryDate} onBlur={props.handleBlur} onChange={props.handleChange} />
                    <Input inputType="text" inputName="cvc" maxLength="3" inputText="CVC" errors={props.errors.cvc} onBlur={props.handleBlur} onChange={props.handleChange} />
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
            <input type="submit" disabled={!props.values.cardName && !props.values.cardNumber && !props.values.expiryDate && !props.values.cvc && props.errors} className="Login-form__button Entry-button" value="Сохранить" />
          </Form>
          </div>
          )
        }
      </Formik>
    </div>
  )
}

export default ProfileForm;