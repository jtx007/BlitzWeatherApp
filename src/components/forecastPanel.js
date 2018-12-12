import React, { Component } from 'react'
import secret from '../secret'
import getWeatherData from '../adapters'
export default class forecastPanel extends Component {
    render () {
        console.log(secret, getWeatherData)
        return (
            <div className="forecast-panel">

            </div>
        )
    }
}