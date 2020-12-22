import React from 'react';
import {PropTypes} from "prop-types";
import { connect } from "react-redux";
import { authenticate } from "../actions/authenticateAction";
import { Link } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";

export class LoginForm extends React.Component {
    render() {
    return (
      <div className="Form-container">
         <Formik 
          initialValues = {{
            email: "",
            password: ""
          }}
          onSubmit={values => {this.props.auth(values.email, values.password)}}
          validate={ values => {
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
        }}>

            {props => (
            <Form className="Form">
              <h2 className="Form__heading">Войти</h2>
              <div className="Form__content">
                <div className="Form__inputs">
                  <label className="Form__label Form__label--email" htmlFor="Email">
                    <p className="Form__text">Email:</p>
                    <input { ...props.getFieldProps("email")} type="email"  name="email" data-testid="email" id="Email" className="Form__input" placeholder="mail@mail.ru"/>
                    <ErrorMessage name="email" component="div" className="Form__error"/>
                  </label>
                  <label className="Form__label Form__label--password" htmlFor="Password">
                    <p className="Form__text">Пароль:</p>
                    <input  { ...props.getFieldProps("password")} type="password" data-testid="password"  id="Password" className="Form__input" name="password" placeholder="************"/>
                    <ErrorMessage name="password" component="div" className="Form__error"/>
                  </label>
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
}

LoginForm.propTypes = {
  auth: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  auth: (email, password) => dispatch(authenticate({email, password}))
})

export default connect(null, mapDispatchToProps)(LoginForm);