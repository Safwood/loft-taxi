import React from 'react';
import { Link } from "react-router-dom"
import '../css/Registration.css';
import {connect} from "react-redux"
import {register} from "../actions/registerAction"


class RegistrationForm extends React.Component {
  state = {
    email: "", 
    password: "", 
    name: "", 
    surname: ""
  }

  changeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  changeName = (e) => {
    this.setState({name: e.target.value})
  }

  changePassword = (e) => {
    this.setState({password: e.target.value})
  }

  changeSurname = (e) => {
    this.setState({surname: e.target.value})
  }

  saveData = (e) => {
    e.preventDefault();
    this.props.register(this.state.email, this.state.password, this.state.name, this.state.surname)
  }
 
  render() {
    return (
      <div  className="Form-container">
        <form onSubmit={this.saveData} className="Form">
          <h2 className="Form__heading">Регистрация</h2>
          <div className="Form__content">
            <label className="Form__label" htmlFor="email">
              <p className="Form__text">Email*</p>
              <input onChange={this.changeEmail} id="email" type="email"  data-testid="email" className="Form__email Form__input" name="email" size="28" placeholder="mail@mail.ru"/>
            </label>
            <label className="Form__label" htmlFor="name">
              <p className="Form__text">Как вас зовут?*</p>
              <input id="name" onChange={this.changeName} type="text"  data-testid="name" className="Form__email  Form__input" name="name" size="28" placeholder="Петр Александрович"/>
            </label>
            <label className="Form__label" htmlFor="surname">
              <p className="Form__text">Как ваша фамилия?*</p>
              <input id="surname" onChange={this.changeSurname} type="text"  data-testid="surname" className="Form__email  Form__input" name="name" size="28" placeholder="Петр Александрович"/>
            </label>
            <label className="Form__label" htmlFor="password">
              <p className="Form__text">Придумайте пароль*</p>
              <input onChange={this.changePassword} id="password" data-testid="password" type="password" className="Form__password  Form__input" name="password" size="28" placeholder="************"/>
            </label >
            <input type="submit" className="Form__button Entry-button" value="Зарегистрироваться" />
            <div className="Form__new-user">
              <p className="Form__new-user-text">Уже зарегистрированы?</p>
              <Link to="/" className="Button New-user__button Form__button">Войти</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
  
}

const mapDispatchToProps = dispatch => ({
  register: (email, password, name, surname) => dispatch(register({email, password, name, surname}))
})

export default connect(null, mapDispatchToProps)(RegistrationForm);