import React from 'react';
import { LoginForm } from './components/Login';
import { SideSection } from './components/Side-section';
import { RegistrationForm}  from './components/Registration';
import { Map } from './components/Map';
import { Profile } from './components/Profile';
import './css/App.css';
import './css/Header.css';
import './css/LoginForm.css';
import './css/Side-section.css';
import map from './map.png';
import logo from './Logo2.svg';

const PAGES = (navigateTo) => ({
  map: <Map />,
  profile: <Profile />,
  login: <LoginForm navigateTo={navigateTo}/>,
  registration: <RegistrationForm navigateTo={navigateTo}/>
})

export class App extends React.Component {
  state = { currentPage: "login" }

  navigateTo = (page) => {
    this.setState({ currentPage: page});
  }

  render () {
    return (
      <div className="App" style={{backgroundImage: "url(" + map +")"}}>
        <header className="Header">
          <div className="Container Header__container">
            <div className="Header__column">
              <img src={logo}  className="Header__logo" alt='logo'/>
            </div>
            <nav>
              <ul className="Header__column">
                <li>
                  <button onClick={() => {this.navigateTo("map")}} className="Header__column-link Header__column-link--active">Карты</button>
                </li>
                <li>
                  <button onClick={() => {this.navigateTo("profile")}} className="Header__column-link">Профиль</button>
                </li>
                <li>
                  <button onClick={() => {this.navigateTo("login")}} className="Header__column-link">Войти</button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="Main">
          <section className="Container">
            {PAGES(this.navigateTo)[this.state.currentPage]}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
