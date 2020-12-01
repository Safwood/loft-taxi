import React from 'react';
import logo from '../logo.svg';
import {WithAuth} from "./AuthContext";
import LoginForm from "./FormContainer";
import LoginNotification from "./LoginNotification";
import {PropTypes} from "prop-types";


export class Login extends React.Component {
  goToPage = (page) => {
    this.props.navigate(page);
  }

  render() {
    return (
      <div  className="Starting-page">
        <section className="Side-section">
          <img src={logo}  className="Side-section__logo" alt='logo'/>
        </section>
        <main className="Starting-page__main-block">
          {this.props.isLoggedIn 
          ? (
            <LoginNotification goToPage={this.goToPage}/>
            ) 
          : (
            <LoginForm goToPage={this.goToPage}/>
          )}
        </main>
      </div>
    )
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
}

export const LoginWithAuth = WithAuth(Login);