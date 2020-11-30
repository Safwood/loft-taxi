import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import {WithAuth} from './AuthContext'
import logo from '../Logo2.svg';
import {PropTypes} from "prop-types"


export class Map extends Component {
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

  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2Fmd29vZCIsImEiOiJja2h6eTVtY2MwazZmMnNxaHVsdnBhM3k2In0.dipQbU6mft7qKnKJBWj3kA";
    this.map = new mapboxgl.Map ({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [37.6156, 55.7522],
      zoom: 10,
    })

  }

  componentWillUnmount() {
    this.map.remove();
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
                    <button onClick={this.goToMapPage} className="Header__column-button Header__column-button--active">Карты</button>
                  </li>
                  <li>
                    <button onClick={this.goToProfilePage} className="Header__column-button">Профиль</button>
                  </li>
                  <li>
                    <button onClick={this.unauthenticate} className="Header__column-button">Выйти</button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div className="Map-wrapper">
            <div className="Map" data-testid="map" ref={this.mapContainer}>
          </div>
        </div>
     </div>
      
    )
  }
}

Map.propTypes = {
  LogOut: PropTypes.func,
  navigate: PropTypes.func,
}

export const MapWithAuth = WithAuth(Map);
