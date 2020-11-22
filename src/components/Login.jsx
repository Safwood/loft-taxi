import React from 'react';

export const LoginForm = ({navigateTo}) => {
    return (
      <form onSubmit={() => navigateTo("map")} className="Login-form">
        <h2 className="Login-form__heading">Войти</h2>
        <div className="Login-form__content">
          <label>
            Email:
            <input type="email" className="Login-form__email" name="email" placeholder="mail@mail.ru"/>
          </label>
          <label>
            Пароль:
            <input type="password" className="Login-form__password" name="password" placeholder="************"/>
          </label>
          <input type="submit" className="Login-form__button" value="Войти" />
          <div className="Login-form__new-user">
            <p className="Login-form__new-user-text">Новый пользователь?</p>
            <a href="#" className="Login-form__new-user-link">Регистрация</a>
          </div>
        </div>
      </form>
    )
}