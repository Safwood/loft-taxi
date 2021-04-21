import React, {useCallback} from 'react';
import { useDispatch } from "react-redux";
import logo from '../../../images/Logo2.svg';
import { Link, NavLink } from "react-router-dom"
import './Header.css';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const logOut = useCallback(
    () => dispatch({type: "auth/LOG_OUT"}), 
    [dispatch]
  )

  const unauthenticate = ():void => {
    logOut()
  }

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
                      <Link to="/" onClick={unauthenticate} className="Menu__button">Выйти</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
    </div>
  )
}

export default Header;
