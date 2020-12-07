import React, {Component} from 'react';
import {PropTypes} from "prop-types";
import { connect } from "react-redux"
import { authenticate } from "../actions"
import { Link } from "react-router-dom"

class LoginForm extends Component {
  state = {email: "", password: ""}

  changeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  changePassword = (event) => {
    this.setState({password: event.target.value})

  }

  authenticate = (event) => {
    event.preventDefault();
    //const {email, password} = this.state;
    const {email, password} = event.target;

    this.props.auth(email.value, password.value)
  }

  render() {
    console.log(this.props)
    return (
      <div className="Form-container">
        <form onSubmit={this.authenticate} className="Form">
          <h2 className="Form__heading">Войти</h2>
          <div className="Form__content">
            <div className="Form__inputs">
              <label className="Form__label" htmlFor="Email">
                <p className="Form__text">Email:</p>
                <input onChange={this.changeEmail} type="email" data-testid="email"  id="Email" className="Form__email  Form__input" name="email" placeholder="mail@mail.ru"/>
              </label>
              <label className="Form__label" htmlFor="Password">
                <p className="Form__text">Пароль:</p>
                <input type="password" onChange={this.changePassword} data-testid="password"  id="Password" className="Form__password Form__input" name="password" placeholder="************"/>
              </label>
            </div>
            <input type="submit" className="Login-form__button Entry-button" value="Войти" />
            <div className="Form__new-user">
              <p className="Form__new-user-text">Новый пользователь?</p>
              <Link to="/registration" className="Button New-user__button Login-form__new-user-button">Регистрация</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  authenticate: PropTypes.func,
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
  auth: (email, password) => dispatch(authenticate({email, password}))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);