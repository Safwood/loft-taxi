import { Link } from "react-router-dom"
import './Registration.css';
import { Formik, Form } from "formik";
import Input from "../Input/Input"
import Preloader from '../Preloader/Preloader';
import ErrorNotification from "../ErrorNotification/ErrorNotification"
import React, { useCallback } from 'react';
import { useDispatch, useSelector} from "react-redux"

export const RegistrationForm = (props) => {
  const hasAuthError = useSelector((state) => state.auth.hasAuthError)
  const isPreloaderOn = useSelector((state) => state.loader.isPreloaderOn)
  const dispatch = useDispatch();
  const register = useCallback((email, password, name, surname) => dispatch({type: 'REGISTER', payload: { email, password, name, surname}}), [dispatch]);

  const validate = values => {
    let errors= {}

    if (!values.email) {
      errors.email = "Укажите, пожалуйста, электронную почту"
    } else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Email должен быть написан латинскими буквами, содержать символы '@' и '.'";
    }

    if (!values.password) {
      errors.password = "Укажите, пожалуйста, пароль"
    } else if (values.password.length < 6) {
      errors.password = "Пароль должен быть не менее 6 символов"
    }

    if (!values.name) {
      errors.name = "Укажите, пожалуйста, Ваше имя"
    }

    if (!values.surname) {
      errors.surname = "Укажите, пожалуйста, Вашу фамилию"
    }

    return errors

  }

  const onSubmit = (values) => {
    register(values.email, values.password, values.name, values.surname)
  }

  let initialValues = {
    email: "", 
    password: "", 
    name: "", 
    surname: ""
  }

  return (
    <div  className="Form-container">
      <Formik
      initialValues = {initialValues}
      onSubmit={onSubmit}
      validate={validate}>

      {props => (
      <Form className="Form">
        <h2 className="Form__heading">Регистрация</h2>
        <div className="Form__content">
          <div className="Auth_error">
              {hasAuthError
              ? <ErrorNotification error={hasAuthError}/>
              : null
              }
          </div>
          <div>
            {isPreloaderOn
            ? <Preloader />
            : null
            }
          </div>
          <Input inputType="email" inputName="email" inputText="Email*" placeholder="mail@mail.ru"  errors={props.errors.email} onBlur={props.handleBlur} onChange={props.handleChange}/>
          <Input inputType="text" inputName="name" inputText="Как вас зовут?*" placeholder="Alexander"  errors={props.errors.name} onBlur={props.handleBlur} onChange={props.handleChange}/>
          <Input inputType="text" inputName="surname" inputText="Как ваша фамилия?*" placeholder="Ivanov"  errors={props.errors.surname} onBlur={props.handleBlur} onChange={props.handleChange}/>
          <Input inputType="password" inputName="password" inputText="Придумайте пароль*" placeholder="**********"  errors={props.errors.password} onBlur={props.handleBlur} onChange={props.handleChange}/>
          <input type="submit"  disabled={!props.values.email && !props.values.password && !props.values.name && !props.values.surname && props.errors} className="Form__button Entry-button" value="Зарегистрироваться" />
          <div className="Form__new-user">
            <p className="Form__new-user-text">Уже зарегистрированы?</p>
            <Link to="/" className="Button New-user__button Form__button">Войти</Link>
          </div>
        </div>
      </Form>
      )}
      </Formik>
    </div>
  )
}

export default RegistrationForm;