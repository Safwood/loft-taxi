import React from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import  MapPage from './pages/MapPage/MapPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./privateRoute"
import './css/Form.css';
import './css/Button.css';
import map from './images/map.png';

export const App: React.FC<{}> = () => {
  return (
    <div className="App" style={{backgroundImage: "url(" + map +")"}}>
      <main className="Main">
        <section>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage}/>
            <PrivateRoute path="/map" component={MapPage} />
            <PrivateRoute path="/profile" component={ProfilePage}/>
          </Switch>
        </section>
      </main>
    </div>
  );
}

export default(App);
