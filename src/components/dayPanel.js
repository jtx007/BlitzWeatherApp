import React from 'react'
import Skycons from 'react-skycons'



const DayPanel = ({ weather }) => {
    const convertIconFormat = (icon) => {
        let newIcon = icon.toUpperCase().split("-").join("_")
        return newIcon
    }
    
    const convertEpochToDate = (val) => {
        let myDate = (new Date(val * 1000).toString().slice(0, 15))
        return myDate
    }
    const convertEpochToTime = (val) => {
        let myTime = (new Date(val * 1000).toString().slice(15, 60))
        return myTime
    }


    return (
        <>
            <div>
                <p>{convertEpochToDate(weather.time)}</p>
                <Skycons
                color='black'
                icon={convertIconFormat(weather.icon)}
                autoplay={true}
                />
                <strong><p className="high-low-temperatures">{Math.round(weather.temperatureMax)}˚  {Math.round(weather.temperatureMin)}˚</p></strong>
                <p>{weather.summary}</p>
                <p>UV Index: {weather.uvIndex}</p>
                <p>Humidity: {Math.floor(weather.humidity*100)}%</p>
                <p>Windspeed: {weather.windSpeed} mph</p>
                <p>Visibility: {weather.visibility}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunrise: {convertEpochToTime(weather.sunriseTime)} AM</p>
                <p>Sunset: {convertEpochToTime(weather.sunsetTime)} PM</p>
            </div>

        </>
    )
}

export default DayPanel;