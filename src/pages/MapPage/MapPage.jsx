import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import Header from "../components/Header/Header";
import MapNotification from "../components/MapNotification/MapNotification";
import OrderForm from "../components/OrderForm/OrderForm";
import {drawRoute} from "../../helper/routeFunction";
import './MapPage.css';

const MapPage = () => {
  const mapContainer = useRef();
  const isRouteSaved = useSelector((state) => state.route.isRouteSaved)
  const isCardSaved = useSelector((state) => state.card.isCardSaved)
  const route = useSelector((state) => state.route.route)
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch();
  const getAddress = useCallback(() => dispatch({type: "GETADDRESS"}), [dispatch])
  const getCard = useCallback((token) => dispatch({type: "GETCARD", payload: token }), [dispatch])
  
  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1Ijoic2Fmd29vZCIsImEiOiJja2h6eTVtY2MwazZmMnNxaHVsdnBhM3k2In0.dipQbU6mft7qKnKJBWj3kA";
    const map = new mapboxgl.Map ({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [37.6156, 55.7522],
      zoom: 10,
    })

    getAddress()
    getCard(token)
    
    map.on('load', function() {
      if (route) {
        drawRoute(map, route);
      }
    })

    return () => {
      if (map.getLayer("route")) {
        map.removeLayer("route");
      }
    
      if (map.getSource("route")) {
        map.removeSource("route");
      }

      map.remove();
    }
  }, [isRouteSaved, getAddress, getCard, token, route])

  return (
    <div>
      <Header/>
      <div className="Map-wrapper">
        <div className="Map" ref={mapContainer}></div>
        {isCardSaved
        ? <OrderForm></OrderForm>
        : <MapNotification></MapNotification>
        }  
      </div>
    </div>
  )
}

export default MapPage;