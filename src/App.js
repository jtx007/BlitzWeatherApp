import React, { Component } from 'react';
import ForecastPanel from './components/forecastPanel'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header-navbar">
          <h1>Weather App</h1>
        </div>
        <ForecastPanel/>

      </div>
    );
  }
}

export default App;
