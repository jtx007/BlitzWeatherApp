import React, { Component, Fragment } from 'react'
import DayPanel from './dayPanel.js'


export default class forecastPanel extends Component {


    state = {
        weather: [],
        location: ""
    }


    
    renderWeatherPanels = (data) => {
        if (data === undefined || data.length === 0) {
            return (
            <div className="splash-page-panel">
                <Fragment>
                        <div className="splash-page-icons">
                            <h1>Welcome to Blitz</h1>
                            <div className="icon sun-shower">
                                <div className="cloud">
                                </div> 
                                <div className="sun" >
                                <div className="rays" > </div> 
                                </div> 
                                <div className="rain"> 
                                </div> 
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
                </Fragment>
            </div>

            )
        } else {
        return data.map(day => {
            return <div key={day.time} className={`day-panel animated fadeInUp`}><DayPanel key={day.time} weather={day}/></div>
        }
        )}
    }

    handleSearchBox = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    weatherSearch = (e) => {
        e.preventDefault()
        fetch(`https://blitzproxyserver.herokuapp.com/?location=${this.state.location}`)
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
                    <input onChange={this.handleSearchBox} placeholder="Enter location here" className="search-input"/>
                    <button className="search-btn" type="submit">
                        <i className="material-icons">search</i></button> 
                </form>
                <div className="forecast-panel">
                    {this.renderWeatherPanels(this.state.weather)}
                </div>
            </div>
        )
    }
}