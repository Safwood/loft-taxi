import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapboxgl from 'mapbox-gl';
import Header from "./Header";
import MapNotification from "./MapNotification";
import OrderForm from "./OrderForm";
import {getAddress} from "../actions";
import '../css/Map.css';


class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  uploadAddressList = async () => {
    await this.props.getAddress()
    console.log(true)
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
    console.log(true)
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
  isAddressListUpload: state.card.isAddressListUpload,
})

const mapDispatchToProps = dispatch => ({
  getAddress: () => dispatch(getAddress({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Map);
