import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Input from "../Input/Input"
import ErrorNotification from "../ErrorNotification/ErrorNotification"
import Preloader from '../Preloader/Preloader';

export const LoginForm = () => {
  const error = useSelector((state) => state.auth.error);
  const isPreloaderOn = useSelector((state) => state.loader.isPreloaderOn);
  const dispatch = useDispatch();
  const auth = useCallback((email, password) => dispatch({type: "auth/AUTHENTICATE", payload: { email, password }}), [dispatch])
  const setRouteBuildFalse = useCallback(() => dispatch({type: "route/SET_ROUTE_BUILT_FALSE"}), [dispatch])

  const initialValues = {
    email: "",
    password: ""
  }

  const onSubmit = values => {
    auth(values.email, values.password);
    setRouteBuildFalse();
  }

  const validate = values => {
    let errors = {};

    if (!values.email) {
      errors.email = "Поле 'Email' должно быть заполнено"
    } else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Email должен быть написан латинскими буквами, содержать символы '@' и '.'";
    }

    if (!values.password) {
      errors.password = "Поле 'Пароль' должно быть заполнено"
    }

    return errors     
  }

  return (
    <div className="Form-container">
      <Formik 
        initialValues = {initialValues}
        onSubmit={onSubmit}
        validate={validate}
        >
        {props => (
        <Form className="Form">
          <h2 className="Form__heading">Войти</h2>
          <div className="Form__content Form__content--loginForm">
            <div className="Auth_error">
              {error
              ? <ErrorNotification error={error}/>
              : null
              }
            </div>
            <div>
              {isPreloaderOn
              ? <Preloader />
              : null
              }
            </div>
            <div className="Form__inputs">
              <Input inputType="text" inputName="email" inputText="Email:" placeholder="mail@mail.ru"  onChange={props.handleChange} onBlur={props.handleBlur} errors={props.errors.email}/>
              <Input inputType="password" inputName="password" inputText="Пароль:" placeholder="************"  errors={props.errors.password} onBlur={props.handleBlur} onChange={props.handleChange} />
            </div>
            <input type="submit"  disabled={!props.values.email || !props.values.password || props.errors.email || props.errors.password} className="Login-form__button Entry-button" value="Войти" />
            <div className="Form__new-user">
              <p className="Form__new-user-text">Новый пользователь?</p>
              <Link to="/registration" className="Button New-user__button Login-form__new-user-button">Регистрация</Link>
            </div>
          </div>
        </Form>
        )}
      </Formik>    
    </div>
  )
}

export default LoginForm;