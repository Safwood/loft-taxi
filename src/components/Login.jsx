import React from 'react';
import logo from '../logo.svg';
import {WithAuth} from "./AuthContext";
import {PropTypes} from "prop-types"

export class LoginForm extends React.Component {
  goToMapPage = () => {
    this.props.navigate('map');
  }

  goToRegistrationPage = () => {
    this.props.navigate('registration');
  }


  authenticate = (event) => {
    event.preventDefault();
    const {email, password} = event.target;
    this.props.LogIn(email.value, password.value)
  }

  render() {
  return (
    <>
      <div  className="Starting-page">
        <section className="Side-section">
          <img src={logo}  className="Side-section__logo" alt='logo'/>
        </section>
        <main className="Starting-page__main-block">
          {this.props.isLoggedIn ? (
            <div  className="Form-container">
              <form className="Form">
                <div className="Form__notification-wrapper">
                  <p className="Form__notification">
                    You are Logged in.
                  </p>
                  <button onClick={this.goToMapPage} className="Entry-button">Перейти на страницу карты</button>
                </div>
                </form>
            </div>
            ) : (
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
          )}
        </main>
      </div>
    </>
  )
  }
}

LoginForm.propTypes = {
  isLoggedIn: PropTypes.bool,
  LogIn: PropTypes.func,
  navigate: PropTypes.func,
}

export const LoginWithAuth = WithAuth(LoginForm);