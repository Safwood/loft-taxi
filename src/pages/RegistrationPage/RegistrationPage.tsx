import React from 'react';
import logo from '../../images/logo.svg';
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux"
import LoginNotification from "../components/LoginNotification/LoginNotification";
import "./RegistrationPage.css";
import { RootState } from '../../redux/rootReducer'


function RegistrationPage() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  
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
            <RegistrationForm/>
          )}
        </main>
      </div>
    )
}

export default React.memo(RegistrationPage);