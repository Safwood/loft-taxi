import React from 'react';
import { Link } from "react-router-dom"
import '../css/Registration.css';
import {connect} from "react-redux"
import {register} from "../actions/registerAction"
import { Formik, Form, ErrorMessage } from "formik";

export class RegistrationForm extends React.Component {
  render() {
    return (
      <div  className="Form-container">
       <Formik
        initialValues = {{
          email: "", 
          password: "", 
          name: "", 
          surname: ""
        }}
        onSubmit={(values) => {
          this.props.register(values.email, values.password, values.name, values.surname)
        }
        }
        validate={values => {
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

        }}>

        {props => (
        <Form className="Form">
          <h2 className="Form__heading">Регистрация</h2>
          <div className="Form__content">
            <label className="Form__label" htmlFor="email">
              <p className="Form__text">Email*</p>
              <input  { ...props.getFieldProps("email")} id="email" type="email"  data-testid="email" className="Form__email Form__input" name="email" size="28" placeholder="mail@mail.ru"/>
              <ErrorMessage name="email" className="Form__error" component="div"/>
            </label>
            <label className="Form__label" htmlFor="name">
              <p className="Form__text">Как вас зовут?*</p>
              <input id="name"  { ...props.getFieldProps("name")} type="text"  data-testid="name" className="Form__email  Form__input" name="name" size="28" placeholder="Петр"/>
              <ErrorMessage name="name" className="Form__error" component="div"/>
            </label>
            <label className="Form__label" htmlFor="surname">
              <p className="Form__text">Как ваша фамилия?*</p>
              <input id="surname"  { ...props.getFieldProps("surname")} type="text"  data-testid="surname" className="Form__email  Form__input" name="surname" size="28" placeholder="Иванов"/>
              <ErrorMessage name="surname" className="Form__error" component="div"/>
            </label>
            <label className="Form__label" htmlFor="password">
              <p className="Form__text">Придумайте пароль*</p>
              <input  { ...props.getFieldProps("password")} disabled id="password" data-testid="password" type="password" className="Form__password  Form__input" name="password" size="28" placeholder="************"/>
              <ErrorMessage name="password" className="Form__error" component="div"/>
            </label >
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
  
}

const mapDispatchToProps = dispatch => ({
  register: (email, password, name, surname) => dispatch(register({email, password, name, surname}))
})

export default connect(null, mapDispatchToProps)(RegistrationForm);