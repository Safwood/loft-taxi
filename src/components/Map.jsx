import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import {WithAuth} from './AuthContext'
import {HeaderWithAuth} from "./Header";
import {PropTypes} from "prop-types"


export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  goToPage = (page) => {
    this.props.navigate(page);
  }

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
       <HeaderWithAuth goToPage={this.goToPage} currentPage={this.props.currentPage}/>
        <div className="Map-wrapper">
          <div className="Map" data-testid="map" ref={this.mapContainer}>
        </div>
        </div>
     </div>
      
    )
  }
}

Map.propTypes = {
  logOut: PropTypes.func,
  navigate: PropTypes.func,
}

export const MapWithAuth = WithAuth(Map);
