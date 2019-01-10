import React, { Component } from 'react'
import secret from '../secret'
import getWeatherData from '../adapters'


export default class forecastPanel extends Component {

    componentDidMount() {
        getWeatherData(secret, 37.8267, -122.4233)
        .then(r => r.json())
        .then(data => console.log(data))
        
    }

    render () {
        
        return (
            <div className="forecast-panel">
                <div className="weather-panels">
                    <div className="day-panel">
                        <p>Day 1</p>
                    </div>
                    <div className="day-panel">
                        <p>Day 2</p>
                    </div>
                    <div className="day-panel">
                        <p>Day 3</p>
                    </div>
                    <div className="day-panel">
                        <p>Day 4</p>
                    </div>
                    <div className="day-panel">
                        <p>Day 5</p>
                    </div>
                </div>
            </div>
        )
    }
}