import React, {Component} from 'react';
import {WithAuth} from "./AuthContext";
import {PropTypes} from "prop-types";



class LoginForm extends Component {

  goToRegistrationPage = () => {
    this.props.goToPage('registration');
  }

  authenticate = (event) => {
    event.preventDefault();
    const {email, password} = event.target;
    this.props.logIn(email.value, password.value)
  }

  render() {
    return (
      <div className="Form-container">
        <form onSubmit={this.authenticate} className="Form">
          <h2 className="Form__heading">Войти</h2>
          <div className="Form__content">
            <div className="Form__inputs">
              <label className="Form__label" htmlFor="Email">
                <p className="Form__text">Email:</p>
                <input type="email" data-testid="email"  id="Email" className="Form__email  Form__input" name="email" placeholder="mail@mail.ru"/>
              </label>
              <label className="Form__label" htmlFor="Password">
                <p className="Form__text">Пароль:</p>
                <input type="password" data-testid="password"  id="Password" className="Form__password Form__input" name="password" placeholder="************"/>
              </label>
            </div>
            <input type="submit" className="Login-form__button Entry-button" value="Войти" />
            <div className="Form__new-user">
              <p className="Form__new-user-text">Новый пользователь?</p>
              <button onClick={this.goToRegistrationPage} className="Button New-user__button Login-form__new-user-button">Регистрация</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  logIn: PropTypes.func,
  goToPage: PropTypes.func,
}

export default WithAuth(LoginForm);