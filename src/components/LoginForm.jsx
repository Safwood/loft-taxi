import React from 'react';
import {PropTypes} from "prop-types";
import { connect } from "react-redux";
import { authenticate } from "../actions/authenticateAction";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Input from "./Input"
import ErrorNotification from "./ErrorNotification"
import Preloader from './Preloader';

export class LoginForm extends React.Component {
  initialValues ={
    email: "",
    password: ""
  }

  onSubmit = values => {this.props.auth(values.email, values.password)}

  validate = values => {
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
  render() {
    return (
      <div className="Form-container">
        <Formik 
          initialValues = {this.initialValues}
          onSubmit={this.onSubmit}
          validate={this.validate}
          >
          {props => (
          <Form className="Form">
            <h2 className="Form__heading">Войти</h2>
            <div className="Form__content Form__content--loginForm">
              <div className="Auth_error">
                {this.props.hasAuthError
                ? <ErrorNotification error={this.props.hasAuthError}/>
                : null
                }
              </div>
              <div>
                {this.props.isPreloaderOn
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
}

LoginForm.propTypes = {
  auth: PropTypes.func,
}

const mapStateToProps = state => ({
  hasAuthError: state.auth.hasAuthError,
  isPreloaderOn: state.loader.isPreloaderOn
})

const mapDispatchToProps = dispatch => ({
  auth: (email, password) => dispatch(authenticate({email, password}))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);