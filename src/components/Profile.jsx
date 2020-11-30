import React from 'react';
import {WithAuth} from './AuthContext'
import logo from '../Logo2.svg';
import {PropTypes} from "prop-types"


export class Profile extends React.Component {

  unauthenticate = () => {
    this.props.LogOut();
    this.props.navigate('login')
  }

  goToMapPage = () => {
    this.props.navigate('map');
  }

  goToProfilePage = () => {
    this.props.navigate('profile');
  }
  

  render() {
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
                      <button onClick={this.goToMapPage} className="Header__column-button ">Карты</button>
                    </li>
                    <li>
                      <button onClick={this.goToProfilePage} className="Header__column-button Header__column-button--active">Профиль</button>
                    </li>
                    <li>
                      <button onClick={this.unauthenticate} className="Header__column-button">Выйти</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
        <>Profile</>
      </div>
    )
  }
}

Profile.propTypes = {
  LogOut: PropTypes.func,
  navigate: PropTypes.func,
}

export const ProfileWithAuth = WithAuth(Profile);