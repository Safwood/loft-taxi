import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import Input from "../Input/Input"
import AppLink from "../Link/Link"
import ErrorNotification from "../ErrorNotification/ErrorNotification"
import Preloader from '../Preloader/Preloader';
import { RootState } from '../../../redux/rootReducer'
import { AuthFormValuesType } from '../../../types'
import SubmitButton from '../SubmitButton/SubmitButton';
import { loginSchema } from './loginSchema'
import './LoginForm.css'

function LoginForm() {
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

  return (
    <div className="Login">
      <Formik 
        initialValues = {initialValues}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
        >
        {({values, errors, handleChange, handleBlur}) => (
        <Form className="Login__form">
          <h2 className="Login__heading">Войти</h2>
          <div className="Login__content">
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
            <div className="Login__inputs">
              <Input inputType="text" inputName="email" inputText="Email:" placeholder="mail@mail.ru"  onChange={handleChange} onBlur={handleBlur} errors={errors.email}/>
              <Input inputType="password" inputName="password" inputText="Пароль:" placeholder="************"  errors={errors.password} onBlur={handleBlur} onChange={handleChange} />
            </div>
            <SubmitButton  disabled={
              !values.email || 
              !values.password || 
              errors.email || 
              errors.password 
              ? true : false}
              value={"Войти"} />
            <div className="Login__new">
              <p className="Login__text">Новый пользователь?</p>
              <AppLink link={"/registration"} text={"Регистрация"}/>
            </div>
          </div>
        </Form>
        )}
      </Formik>    
    </div>
  )
}

export default React.memo(LoginForm);