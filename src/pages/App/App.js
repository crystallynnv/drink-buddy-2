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
    lat: 37.422,
    lng: 122.0841
   }

  render() { 
    return ( 
      <div>
        <h1>Landing Page</h1>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 37.4220,
            lng: 122.0841
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.API_KEY
})(App);

