import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from '../../components/Map.jsx';

class App extends Component {
  state = { 
    user: '',
   }

  render() { 
    return ( 
      <div>
        <h1>Landing Page</h1>
  
        <Map />
      </div>
    );
  }
}
 
export default App;
