import React from 'react';

export default class RegistrationForm extends React.Component {
  state = { email: '', firstName: '', password: ''};

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state.email);
  }

  handleEmailChange = event => {
    this.setState({email: event.target.value});
  }

  handleFirstNameChange = event => {
    this.setState({firstName: event.target.value});
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value});
  }

  render() {
    const { email, firstName, password} = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="Registration-form">
        <h2 className="Registration-form__heading">Регистрация</h2>
        <div className="Registration-form__content">
          <label htmlFor="email">Email*</label>
          <input id="email" type="email" className="Registration-form__email" name="email" size="28" value={email} placeholder="mail@mail.ru" onChange={this.handleEmailChange}/>
          <label htmlFor="name">Как Вас зовут?* </label>
          <input id="name" type="text" className="Registration-form__email" name="name" size="28" value={firstName} placeholder="Петр Александрович" onChange={this.handleFirstNameChange}/>
          <label htmlFor="password">Придумайте пароль*</label >
          <input id="password" type="password" className="Registration-form__password" name="password" size="28" value={password} placeholder="************" onChange={this.handlePasswordChange}/>
          <input type="submit" className="Registration-form__button" value="Зарегистрироваться" />
          <div className="Registration-form__new-user">
            <p className="Registration-form__new-user-text">Уже зарегистрированы?</p>
            <a href="#" className="Registration-form__new-user-link">Войти</a>
          </div>
        </div>
      </form>
    )
  }
}