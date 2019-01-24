import React, { Component } from 'react'
import Skycons from 'react-skycons'

export default class DayPanel extends Component {

    convertIconFormat = (icon) => {
        let newIcon = icon.toUpperCase()
        return newIcon
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="day-panel">
                    <Skycons
                    color='black'
                    icon={this.convertIconFormat(this.props.weather.icon)}
                    autoplay={true}
                    />
                </div>
            </div>
        )
    }
}