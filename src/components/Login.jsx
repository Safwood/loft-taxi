import React from 'react';
import logo from '../images/logo.svg';
import LoginForm from "./LoginForm";
import { connect } from "react-redux"
import { authenticate } from "../actions"
import LoginNotification from "./LoginNotification";
import {PropTypes} from "prop-types";


class Login extends React.Component {
  
  render() {
    return (
      <div  className="Starting-page">
        <section className="Side-section">
          <img src={logo}  className="Side-section__logo" alt='logo'/>
        </section>
        <main className="Starting-page__main-block">
          {this.props.isLoggedIn 
          ? (
            <LoginNotification/>
            ) 
          : (
            <LoginForm/>
          )}
        </main>
      </div>
    )
  }
}


export default connect((state) => ({isLoggedIn: state.auth.isLoggedIn}))(Login);