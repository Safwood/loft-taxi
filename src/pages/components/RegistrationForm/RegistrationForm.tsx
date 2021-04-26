import './RegistrationForm.css';
import { Formik, Form } from "formik";
import AppLink from "../Link/Link"
import Input from "../Input/Input"
import Preloader from '../Preloader/Preloader';
import ErrorNotification from "../ErrorNotification/ErrorNotification"
import React, { useCallback } from 'react';
import { useDispatch, useSelector} from "react-redux"
import { RootState } from '../../../redux/rootReducer'
import { AuthFormValuesType } from '../../../types'
import SubmitButton from '../SubmitButton/SubmitButton'
import { registrationSchema } from './registrationSchema'

export const RegistrationForm: React.FC = () => {
  const error = useSelector((state: RootState) => state.auth.error)
  const isPreloaderOn = useSelector((state: RootState) => state.loader.isPreloaderOn)
  const dispatch = useDispatch();
  const register = useCallback((email, password, name, surname) => dispatch({type: 'registration/REGISTER', payload: { email, password, name, surname}}), [dispatch]);

  const onSubmit = (values: AuthFormValuesType): void => {
    register(values.email, values.password, values.name, values.surname)
  }

  let initialValues: AuthFormValuesType = {
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
      validationSchema={registrationSchema}>

      {({errors, values, handleBlur, handleChange}) => (
      <Form className="Form">
        <h2 className="Form__heading">Регистрация</h2>
        <div className="Form__content">
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
          <Input inputType="email" inputName="email" inputText="Email*" placeholder="mail@mail.ru"  errors={errors.email} onBlur={handleBlur} onChange={handleChange}/>
          <Input inputType="text" inputName="name" inputText="Как вас зовут?*" placeholder="Alexander"  errors={errors.name} onBlur={handleBlur} onChange={handleChange}/>
          <Input inputType="text" inputName="surname" inputText="Как ваша фамилия?*" placeholder="Ivanov"  errors={errors.surname} onBlur={handleBlur} onChange={handleChange}/>
          <Input inputType="password" inputName="password" inputText="Придумайте пароль*" placeholder="**********"  errors={errors.password} onBlur={handleBlur} onChange={handleChange}/>
          <SubmitButton  disabled={
            !values.email && 
            !values.password && 
            !values.name && 
            !values.surname && 
            errors 
            ? true 
            : false} 
            value={"Зарегистрироваться"} />
          <div className="Form__new-user">
            <p className="Form__new-user-text">Уже зарегистрированы?</p>
            <AppLink link={"/"} text={"Войти"}/>
          </div>
        </div>
      </Form>
      )}
      </Formik>
    </div>
  )
}

export default RegistrationForm;