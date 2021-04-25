import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import Input from "../Input/Input"
import AppLink from "../Link/Link"
import ErrorNotification from "../ErrorNotification/ErrorNotification"
import Preloader from '../Preloader/Preloader';
import { RootState } from '../../../redux/rootReducer'
import { AuthFormValuesType, AuthErrorsType } from '../../../types'
import SubmitButton from '../SubmitButton/SubmitButton';

export const LoginForm: React.FC<{}> = () => {
  const error = useSelector((state: RootState) => state.auth.error);
  const isPreloaderOn = useSelector((state: RootState) => state.loader.isPreloaderOn);
  const dispatch = useDispatch();
  const auth = useCallback((email, password) => dispatch({type: "auth/AUTHENTICATE", payload: { email, password }}), [dispatch])
  const setRouteBuildFalse = useCallback(() => dispatch({type: "route/SET_ROUTE_BUILT_FALSE"}), [dispatch])

  const initialValues: AuthFormValuesType = {
    email: "",
    password: ""
  }

  const onSubmit = (values: AuthFormValuesType): void => {
    auth(values.email, values.password);
    setRouteBuildFalse();
  }

  const validate = (values: AuthFormValuesType): AuthErrorsType => {
    let errors: AuthErrorsType = {};

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
            <SubmitButton  disabled={
              !props.values.email || 
              !props.values.password || 
              props.errors.email || 
              props.errors.password 
              ? true : false}
              value={"Войти"} />
            <div className="Form__new-user">
              <p className="Form__new-user-text">Новый пользователь?</p>
              <AppLink link={"/registration"} text={"Регистрация"}/>
            </div>
          </div>
        </Form>
        )}
      </Formik>    
    </div>
  )
}

export default LoginForm;