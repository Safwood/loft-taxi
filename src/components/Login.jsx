import React from 'react';
import logo from '../images/logo.svg';
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux"
import LoginNotification from "./LoginNotification";
import '../css/Starting-page.css';
import '../css/Side-section.css';

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  
    return (
      <div  className="Starting-page">
        <section className="Side-section">
          <img src={logo}  className="Side-section__logo" alt='logo'/>
        </section>
        <main className="Starting-page__main-block">
          {isLoggedIn 
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

export default Login;