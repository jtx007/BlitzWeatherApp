import React, { Component } from 'react'
import DayPanel from './DayPanel.js'


export default class forecastPanel extends Component {


    state = {
        weather: [],
        location: ""
    }


    
    renderWeatherPanels = (data) => {
        return data.map(day => {
            return <div key={day.time} className="day-panel"><DayPanel key={day.time} weather={day}/></div>
        })
    }

    handleSearchBox = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    weatherSearch = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9000/?location=${this.state.location}`)
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
                    <input onChange={this.handleSearchBox} className="search-input" placeholder="Type in your location here"/>
                    <button className="search-btn" type="submit">Search</button> 
                </form>
                <div className="forecast-panel">
                    {this.renderWeatherPanels(this.state.weather)}
                </div>
            </div>
        )
    }
}