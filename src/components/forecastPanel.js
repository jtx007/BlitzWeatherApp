import React, { Component } from 'react'
import secret from '../secret'
import getWeatherData from '../adapters'


export default class forecastPanel extends Component {



    render () {
         getWeatherData(secret, 37.8267, -122.4233)
         .then(r => r.json())
         .then(data => console.log(data))
        
        return (
            <div className="forecast-panel">

            </div>
        )
    }
}