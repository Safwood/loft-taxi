import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapboxgl from 'mapbox-gl';
import Header from "./Header";
import MapNotification from "./MapNotification";
import OrderForm from "./OrderForm";
import {getAddress} from "../actions/addressAction";
import {getCard} from "../actions/cardAction";
import {drawRoute} from "../helper/routeFunction";
import '../css/Map.css';

class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  uploadAddressList = async () => {
    await this.props.getAddress()
  }

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2Fmd29vZCIsImEiOiJja2h6eTVtY2MwazZmMnNxaHVsdnBhM3k2In0.dipQbU6mft7qKnKJBWj3kA";
    this.map = new mapboxgl.Map ({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [37.6156, 55.7522],
      zoom: 10,
    })

    this.props.getAddress()
    this.props.getCard(this.props.token)
  }

  componentDidUpdate() {

    if (this.map.getLayer("route")) {
      this.map.removeLayer("route");
    }

    if (this.map.getSource("route")) {
      this.map.removeSource("route");
    }

    if (this.props.route) {
      drawRoute(this.map, this.props.route);
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
     <div>
       <Header/>
        <div className="Map-wrapper">
          <div className="Map" data-testid="map" ref={this.mapContainer}></div>
          {this.props.isCardSaved
          ? <OrderForm></OrderForm>
          : <MapNotification></MapNotification>
          }  
        </div>
     </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isCardSaved: state.card.isCardSaved,
  route: state.route.route,
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  getAddress: () => dispatch(getAddress({})),
  getCard: (token) => dispatch(getCard({token}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Map);
