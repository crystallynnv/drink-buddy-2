import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { useGoogleLogout, useGoogleLogin } from 'react-google-login';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
// import logo from './logo.svg';
import GoogleBtn from '../../components/GoogleBtn';

import './App.css';

const mapStyles = {
  width: '50%',
  height: '50%'
};

const responseGoogle = (response) => {
  console.log(response);
}

class App extends Component {
  // state = { 
  //   user: '',
  //   lat: Number,
  //   lng: Number

  //  }

   

  //  componentDidMount() {
  //   navigator.geolocation.watchPosition((position) => {
  //     this.setState({
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     });
  //     console.log("Latitude is :", this.state.lat );
  //     console.log("Longitude is :", this.state.lng);
  //   });
  // }

  render() { 
    return ( 
      <div>
        <h1>Landing Page</h1>
        <GoogleBtn/>
        {/* <GoogleLogout
          clientId="386175915927-3ajr59s0378hpb3fe49kptddo35v4rfi.apps.googleusercontent.com"
          buttonText="Logout"
          //onLogoutSuccess={logout}
          >
        </GoogleLogout>
        
        <GoogleLogin
          clientId="386175915927-3ajr59s0378hpb3fe49kptddo35v4rfi.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          isSignedIn={true}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        {responseGoogle.profileObj ? 
        <p>Signed in</p> :
        <p>Signed out</p> 
      } */}
        <div class="ui input"><input type="text" placeholder="Search..." /></div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          // center={{
          //   lat: this.state.lat,
          //   lng: this.state.lng
          // }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'Your current location'}
          //position={{lat: this.state.lat, lng: this.state.lng}}
        />
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(App);

