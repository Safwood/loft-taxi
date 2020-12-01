import React, {Component} from 'react';
import {WithAuth} from "./AuthContext";
import {PropTypes} from "prop-types";

class LoginNotification extends Component {

  goToMapPage = () => {
    this.props.goToPage('map');
  }

  render() {
    return (
      <div  className="Form-container">
              <form className="Form">
                <div className="Form__notification-wrapper">
                  <p className="Form__notification">
                    You are Logged in.
                  </p>
                  <button onClick={this.goToMapPage} className="Entry-button">Перейти на страницу карты</button>
                </div>
                </form>
            </div>
    )
  }
}

LoginNotification.propTypes = {
  goToPage: PropTypes.func,
}

export default LoginNotification;