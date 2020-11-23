import React from 'react';

export const RegistrationForm = ({navigateTo}) => {
 
  return (
    <form onSubmit={() => navigateTo("map")} className="Registration-form">
      <h2 className="Registration-form__heading">Регистрация</h2>
      <div className="Registration-form__content">
        <label htmlFor="email">Email*</label>
        <input id="email" type="email" className="Registration-form__email" name="email" size="28" placeholder="mail@mail.ru"/>
        <label htmlFor="name">Как Вас зовут?* </label>
        <input id="name" type="text" className="Registration-form__email" name="name" size="28" placeholder="Петр Александрович"/>
        <label htmlFor="password">Придумайте пароль*</label >
        <input id="password" type="password" className="Registration-form__password" name="password" size="28" placeholder="************"/>
        <input type="submit" className="Registration-form__button" value="Зарегистрироваться" />
        <div className="Registration-form__new-user">
          <p className="Registration-form__new-user-text">Уже зарегистрированы?</p>
          <button onClick={() => navigateTo("login")} className="Registration-form__new-user-link">Войти</button>
        </div>
      </div>
    </form>
  )
  
}