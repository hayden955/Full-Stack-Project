import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
import MapAutoComplete from './MapAutoComplete';
import MapMarker from './/MapMarker';
import PlaceCard from './PlaceCard';


import { Button} from 'antd';

const BOSTON = {lat: 42.361145, lng: -71.057083};

class MapsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constraints: [{ name: '', time: 0 }],
      searchResults: [],
      mapsLoaded: false,
      markers: [],
      map: {},
      mapsApi: {},
      singaporeLatLng: {},
      autoCompleteService: {},
      placesService: {},
      geoCoderService: {},
      directionService: {},
    };
  }



  addMarker = ((place) => {
    const prevMarkers = this.state.markers;
    const markers = Object.assign([], prevMarkers);

    markers.push(place);

    this.setState({ markers });
  });

  apiHasLoaded = ((map, mapsApi) => {
    this.setState({
      mapsLoaded: true,
      map,
      mapsApi,
      singaporeLatLng: new mapsApi.LatLng(BOSTON.lat, BOSTON.lng),
      autoCompleteService: new mapsApi.places.AutocompleteService(),
      placesService: new mapsApi.places.PlacesService(map),
      geoCoderService: new mapsApi.Geocoder(),
      directionService: new mapsApi.DirectionsService(),
    });
  });

  handleSearch = (() => {
    const { markers, constraints, placesService, directionService, mapsApi } = this.state;

    const request = {
      location: {lat: 42.361145, lng: -71.057083},
      keyword: "beach",
      radius: 15000
    };

    placesService.nearbySearch(request, (results, status) => {
      const google = window.google;
      if(results && status == google.maps.places.PlacesServiceStatus.OK){
        console.log(results);
        for(let i = 0; i < results.length; i++){
          this.addMarker(results[i]);
        }
      }else{
        console.log(status);
      }
    });

    
  });

  render() {
    
    const { constraints, mapsLoaded, singaporeLatLng, markers, searchResults } = this.state;
    const { autoCompleteService, geoCoderService } = this.state; // Google Maps Services
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-8 h-lg">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyAFM9agRaYquHxxOemaUEcd9s3GBVXo60M',
              libraries: ['places', 'directions']
            }}
            defaultZoom={11}
            defaultCenter={{lat: 42.361145, lng: -71.057083}}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)} // "maps" is the mapApi. Bad naming but that's their library.
          >

            {markers.map((marker, key) => {
              return (
                <MapMarker key={key} name={marker.name} lat={marker.geometry.location.lat()} lng={marker.geometry.location.lng()} />
              );
            })}
          </GoogleMapReact>
        </div>
        <div className="col-4" style={{backgroundColor: "#696969"}}>
        {this.state.markers.length > 0 ? <PlaceCard info={markers[0]}  ></PlaceCard> : null}
            
        </div>

        {/* Search Button */}
        <Button className="mt-4 fw-md" type="primary" size="large" onClick={this.handleSearch}>Search!</Button>
        </div>
        
      </div>
    )
  }
}

export default MapsContainer;