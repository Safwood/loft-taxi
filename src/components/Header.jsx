import React from 'react';
import logo from '../images/Logo2.svg';
import { PropTypes } from "prop-types"
import { connect } from "react-redux"
import { logOut } from "../actions"
import { Link } from "react-router-dom"
//import { PrivateRoute } from '../privateRoute';



class Header extends React.Component {

  unauthenticate = () => {
    this.props.logOut();
  }

  render () {
    return (
      <div>
         <header className="Header">
             <div className="Container Header__container">
               <div className="Header__column">
                 <img src={logo}  className="Header__logo" alt='logo'/>
               </div>
               <nav>
                 <ul className="Header__column">
                   <li>
                      <Link to="/map" className={'Header__column-button' + " " + (this.props.currentPage === 'map' ? 'Header__column-button--active' : "")}>Карты</Link>
                   </li>
                   <li>
                      <Link to="/profile" className={'Header__column-button' + " " + (this.props.currentPage === 'profile' ? 'Header__column-button--active' : "")}>Профиль</Link>
                   </li>
                   <li>
                     <Link to="/" className="Header__column-button">Выйти</Link>
                   </li>
                 </ul>
               </nav>
             </div>
           </header>
      </div>
    )
  }
}

Header.propTypes = {
  logOut: PropTypes.func,
}

export default connect(null, {logOut})(Header);
