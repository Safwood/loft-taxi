import React from 'react';
import logo from '../images/logo.svg';
import { Link } from "react-router-dom"
import '../css/Registration.css';


const RegistrationForm = () => {
 
  return (
    <div className="Starting-page">
      <section className="Side-section">
        <img src={logo}  className="Side-section__logo" alt='logo'/>
      </section>
      <main className="Starting-page__main-block">
        <div  className="Form-container">
          <form onSubmit={<Link to="/map"></Link>} className="Form">
            <h2 className="Form__heading">Регистрация</h2>
            <div className="Form__content">
              <label className="Form__label" htmlFor="email">
                <p className="Form__text">Email*</p>
                <input id="email" type="email"  data-testid="email" className="Form__email Form__input" name="email" size="28" placeholder="mail@mail.ru"/>
              </label>
              <label className="Form__label" htmlFor="name">
                <p className="Form__text">Как вас зовут?*</p>
                <input id="name" type="text"  data-testid="name" className="Form__email  Form__input" name="name" size="28" placeholder="Петр Александрович"/>
              </label>
              <label className="Form__label" htmlFor="password">
                <p className="Form__text">Придумайте пароль*</p>
                <input id="password" data-testid="password" type="password" className="Form__password  Form__input" name="password" size="28" placeholder="************"/>
              </label >
              <input type="submit" className="Form__button Entry-button" value="Зарегистрироваться" />
              <div className="Form__new-user">
                <p className="Form__new-user-text">Уже зарегистрированы?</p>
                <Link to="/" className="Button New-user__button Form__button">Войти</Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default RegistrationForm;