import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapboxgl from 'mapbox-gl';
import Header from "./Header";
import MapNotification from "./MapNotification";
import OrderForm from "./OrderForm";
import {getAddress} from "../actions";
import {drawRoute} from "../helper/routeFunction";
import '../css/Map.css';

//const coordinates = [
 // [30.272182, 59.800652],
 // [30.274046, 59.800365],
////[30.275146, 59.800365],
//[30.280516, 59.797192],
//[30.317898, 59.790894],
//[30.324347, 59.793816],
//[30.32362, 59.806255],
//[30.323389, 59.812008],
//[30.334572, 59.810379],
//[30.3368, 59.810448],
//[30.35289, 59.81477],
//[30.370289, 59.815208],
//[30.379545, 59.81636],
//[30.380919, 59.818024],
//[30.361811, 59.855789],
//[30.341515, 59.894806],
//[30.339552, 59.90173],
//[30.360826, 59.930965],
//[30.326199, 59.935318],
//[30.328283, 59.940693],
//[30.324488, 59.941109],
//[30.322104, 59.942886],
//[30.316589, 59.940495],
//[30.316273, 59.940578],
//];

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

        
    this.map.on("load", () => {
      console.log(this.props.route)
      if (this.props.route){
        drawRoute(this.map, this.props.route)
      }
    }) 

    this.props.getAddress()
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
  //routeList: coordinates,
  isAddressListUpload: state.card.isAddressListUpload,
})

const mapDispatchToProps = dispatch => ({
  getAddress: () => dispatch(getAddress({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Map);
