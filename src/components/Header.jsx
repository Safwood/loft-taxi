import React from 'react';
import logo from '../Logo2.svg';
import {PropTypes} from "prop-types"
import {WithAuth} from './AuthContext'



class Header extends React.Component {
  
  goToMapPage = () => {
    this.props.goToPage('map');
      }

  goToProfilePage = () => {
    this.props.goToPage('profile')
    
  }

  unauthenticate = () => {
    this.props.logOut();
    this.props.goToPage('login')
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
                     <button onClick={this.goToMapPage} className={'Header__column-button' + " " + (this.props.currentPage === 'map' ? 'Header__column-button--active' : "")}>Карты</button>
                   </li>
                   <li>
                     <button onClick={this.goToProfilePage} className={'Header__column-button' + " " + (this.props.currentPage === 'profile' ? 'Header__column-button--active' : "")}>Профиль</button>
                   </li>
                   <li>
                     <button onClick={this.unauthenticate} className="Header__column-button">Выйти</button>
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
  navigate: PropTypes.func,
}

export const HeaderWithAuth = WithAuth(Header);
