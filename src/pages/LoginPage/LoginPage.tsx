import React from 'react';
import logo from '../../images/logo.svg';
import LoginForm from "../components/LoginForm/LoginForm";
import { useSelector } from "react-redux"
import LoginNotification from "../components/LoginNotification/LoginNotification";
import "./LoginPage.css";
import { RootState } from '../../redux/rootReducer'

const LoginPage: React.FC<{}> = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  
    return (
      <div  className="StartingPage">
        <section className="SideSection">
          <img src={logo}  className="SideSectionLogo" alt='logo'/>
        </section>
        <main className="StartingPageMainBlock">
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

export default LoginPage;