import React from 'react';
import logo from '../images/Logo2.svg';
import { PropTypes } from "prop-types"
import { connect } from "react-redux"
import { logOut } from "../actions/logOutAction"
import { Link, NavLink } from "react-router-dom"
import '../css/Header.css';
import '../css/Menu.css';

export class Header extends React.Component {

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
               <div  className="Header__column">
                 <nav className="Menu">
                   <ul className="Menu__list">
                     <li className="Menu__item">
                        <NavLink to="/map" className='Menu__button'>Карты</NavLink>
                     </li>
                     <li  className="Menu__item">
                        <NavLink to="/profile" className='Menu__button'>Профиль</NavLink>
                     </li>
                     <li  className="Menu__item">
                       <Link to="/" onClick={this.unauthenticate} className="Menu__button">Выйти</Link>
                     </li>
                   </ul>
                 </nav>
               </div>
             </div>
           </header>
      </div>
    )
  }
}

Header.propTypes = {
  logOut: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
})

export default connect(null, mapDispatchToProps)(Header);
