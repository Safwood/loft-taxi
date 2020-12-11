import React from 'react';
import Login from './components/Login';
import RegistrationForm from './components/Registration';
import  Map from './components/Map';
import Profile from './components/Profile';
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./privateRoute"
import './css/App.css';
import './css/Form.css';
import './css/Button.css';
import map from './images/map.png';

export class App extends React.Component {

  render () {
    return (
      <div className="App" style={{backgroundImage: "url(" + map +")"}}>
        
        <main className="Main">
          <section>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/registration" component={RegistrationForm} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={Profile}/>
            </Switch>
          </section>
        </main>
      </div>
    );
  }
}

export default(App);
