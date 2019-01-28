import React, { Component } from 'react'
import DayPanel from './DayPanel.js'


export default class forecastPanel extends Component {


    state = {
        weather: []
    }
    
    renderWeatherPanels = (data) => {
        return data.map(day => {
            return <div key={day.time} className="day-panel"><DayPanel key={day.time} weather={day}/></div>
        })
    }

    weatherSearch = (e) => {
        e.preventDefault()
        fetch("Express Endpoint", {
            method: "POST",
            body: JSON.stringify("latitude and longitude coordinates"),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(r => r.json())
        .then(weather => this.setState({
            weather: weather.daily.data 
        }))
    }

    componentDidMount() {
        fetch('http://localhost:3000/')
        .then(r => r.json())
        .then(weather => this.setState({
            weather: weather.daily.data
        }))
    }  



    render () {
        console.log(this.state.weather)
        return (
            <div className="App-Container">
                <form onSubmit={this.weatherSearch}>
                    <input className="search-input" placeholder="Type in your location here"/>
                    <button className="search-btn" type="submit">Search</button> 
                </form>
                <div className="forecast-panel">
                    {this.renderWeatherPanels(this.state.weather)}
                </div>
            </div>
        )
    }
}