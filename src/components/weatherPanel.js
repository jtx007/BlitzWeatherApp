import React, { useState } from "react";
import DayPanel from './dayPanel';
import {weatherSearch} from '../api/proxyServer';

const WeatherPanel = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [locationSearchTerm, setLocationSearchTerm] = useState("");
  const [loadingState, setLoadingState] = useState(false);

  const weatherSearchSubmit = async (event) => {
    event.preventDefault()
    try {
        const response = await weatherSearch(locationSearchTerm)
        console.log(response.data)
        setWeatherData(response.data.daily.data)
    } catch (error) {
      console.log(error)
    }
  }

  const renderWeatherPanels = (data) => {
    if (data === undefined || data.length === 0) {
      return (
        <div className="splash-page-panel">
          <>
            <div className="splash-page-icons">
              <h1>Welcome to Blitz</h1>
              <div className="icon sun-shower">
                <div className="cloud"></div>
                <div className="sun">
                  <div className="rays"> </div>
                </div>
                <div className="rain"></div>
              </div>
              <div className="icon thunder-storm">
                <div className="cloud"></div>
                <div className="lightning">
                  <div className="bolt"></div>
                  <div className="bolt"></div>
                </div>
              </div>
              <div className="icon cloudy">
                <div className="cloud"></div>
                <div className="cloud"></div>
              </div>
              <div className="icon flurries">
                <div className="cloud"></div>
                <div className="snow">
                  <div className="flake"></div>
                  <div className="flake"></div>
                </div>
              </div>
              <div className="icon sunny">
                <div className="sun">
                  <div className="rays"></div>
                </div>
              </div>
              <div className="icon rainy">
                <div className="cloud"></div>
                <div className="rain"></div>
              </div>
            </div>
          </>
        </div>
      );
    } else {
      return (
        <div className="day-panels">
          {displayWeatherData(data)}
        </div>
      )
    }
  };

  const displayWeatherData = (data) => {
    return data.map((day) => {
      return (
        <div key={day.time} className={`day-panel animated fadeInUp`}>
          <DayPanel key={day.time} weather={day} />
        </div>
      );
    });
  }
  
return (
  <>
    <div className="App-Container">
      <form onSubmit={weatherSearchSubmit}>
        <input
          onChange={(e) => setLocationSearchTerm(e.target.value)}
          value={locationSearchTerm}
          placeholder="Enter location here"
          className="search-input"
        />
        <button className="search-btn" type="submit">
          <i className="material-icons">search</i>
        </button>
      </form>
      <div className="forecast-panel">
        {renderWeatherPanels(weatherData)}
      </div>
    </div>
  </>
);
};

export default WeatherPanel;
