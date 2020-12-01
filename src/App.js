import React from 'react';
import {LoginWithAuth} from './components/Login';
import RegistrationForm from './components/Registration';
import { MapWithAuth } from './components/Map';
import {ProfileWithAuth} from './components/Profile';
import {WithAuth} from './components/AuthContext';
import './css/App.css';
import './css/Header.css';
import './css/Form.css';
import './css/Registration.css';
import './css/Side-section.css';
import './css/Starting-page.css';
import './css/Map.css';
import './css/Button.css';
import map from './map.png';


const PAGES = {
  map: (props) => <MapWithAuth {...props}/>,
  profile:  (props) => <ProfileWithAuth {...props}/>,
  login:  (props) => <LoginWithAuth {...props}/>,
  registration:  (props) => <RegistrationForm {...props}/>,
}

export class App extends React.Component {
  state = { currentPage: "login" }

  navigateTo = (page) => {
    if (page === "login" || page === "registration") {
      this.setState({ currentPage: page});
    } else {
      if(this.props.isLoggedIn) {
        this.setState({ currentPage: page});
      } else {
        this.setState({ currentPage: "login"});
      }
    }
  }

  render () {
    return (
      <div className="App" style={{backgroundImage: "url(" + map +")"}}>
        
        <main className="Main">
          <section>
            {PAGES[this.state.currentPage]({navigate: this.navigateTo, currentPage: this.state.currentPage})}
          </section>
        </main>
      </div>
    );
  }
}

export default WithAuth(App);
