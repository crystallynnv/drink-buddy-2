import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
// import logo from './logo.svg';
import './App.css';

const mapStyles = {
  width: '50%',
  height: '50%'
};

class App extends Component {
  state = { 
    user: '',
    lat: Number,
    lng: Number
   }

   componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      console.log("Latitude is :", this.state.lat );
      console.log("Longitude is :", this.state.lng);
    });
  }

  render() { 
    return ( 
      <div>
        <h1>Landing Page</h1>
        <div class="ui input"><input type="text" placeholder="Search..." /></div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          center={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'Your current location'}
          position={{lat: this.state.lat, lng: this.state.lng}}
        />
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(App);

