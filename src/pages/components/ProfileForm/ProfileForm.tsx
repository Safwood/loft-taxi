import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux"
import './ProfileForm.css';
import { Formik, Form } from "formik";
import Input from "../Input/Input"
import { RootState } from '../../../redux/rootReducer'
import { CardFormValuesType } from '../../../types'
import SubmitButton from '../SubmitButton/SubmitButton';
import Card from '../Card/Card'
import { profileSchema } from './profileSchema'

let a: number = 0;

export const ProfileForm: React.FC<{}> = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const saveCard = useCallback((cardNumber, expiryDate, cardName, cvc) => dispatch({type: "card/SAVE_CARD", payload: { cardNumber, expiryDate, cardName, cvc, token }}), [dispatch, token])
 
  const addSpace = (event: any): void => {
    if (a===4) {
      a=0;
      event.target.value+=" ";
    } 
    a++;
  }

  let initialValues: CardFormValuesType = {
    cardNumber: "", 
    expiryDate: "", 
    cardName: "", 
    cvc: ""
  }

  const onSubmit= (values: CardFormValuesType) => {
    saveCard(values.cardNumber, values.expiryDate, values.cardName, values.cvc )
  }

  return(
    <div className="Profile__form">
      <Formik
        initialValues = {initialValues}
        onSubmit={onSubmit}
        handleChange={addSpace}
        validationSchema={profileSchema}
      > 
      {({errors, values, handleBlur, handleChange}) => (
        <div className="Form-container Form-container--profile">
          <Form className="Form Form--profile">
            <h2 className="Form__heading Form__heading--profile">Профиль</h2>
            <p className="Form__subtitle">Введите платежные  данные</p>
            <div className="Form__content Form__content--profile">
              <div className="Form__blocks">
                <div className="Form__blocks-inputs">
                  <Input inputType="text" inputName="cardName" inputText="Имя владельца" placeholder="ALEXANDER IVANOV"  errors={errors.cardName} onBlur={handleBlur} onChange={handleChange}/>
                  <Input inputType="card" onKeyPress={addSpace} inputName="cardNumber"  inputText="Номер карты" placeholder="5555 5555 5555 5555"  errors={errors.cardNumber} onBlur={handleBlur} onChange={handleChange} />
                  <div className="Form__blocks-date-cvc">
                    <Input inputType="month" inputName="expiryDate" inputText="MM.YY" errors={errors.expiryDate} onBlur={handleBlur} onChange={handleChange} />
                    <Input inputType="text" inputName="cvc" maxlength={3} inputText="CVC" errors={errors.cvc} onBlur={handleBlur} onChange={handleChange} />
                    </div>
                </div>
                <div className="Form__blocks-card" >
                  <Card expiryDate={values.expiryDate} cardNumber={values.cardNumber}/>
                </div>
              </div>
            </div>
            <SubmitButton  disabled={
              !values.cardName && 
              !values.cardNumber && 
              !values.expiryDate && 
              !values.cvc && 
              errors
              ? true
              : false}
              value={"Сохранить"} />
          </Form>
          </div>
          )
        }
      </Formik>
    </div>
  )
}

export default ProfileForm;