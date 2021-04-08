import React from 'react';
import logo from '../../images/logo.svg';
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux"
import LoginNotification from "../components/LoginNotification/LoginNotification";
import styles from "./styles.module.css";


const RegistrationPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
    return (
      <div  className={styles.StartingPage}>
        <section className={styles.SideSection}>
          <img src={logo}  className={styles.SideSectionLogo} alt='logo'/>
        </section>
        <main className={styles.StartingPageMainBlock}>
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

export default RegistrationPage;