
function getWeatherData(secret_key, longitude, latitude) {
    return fetch(`https://api.darksky.net/forecast/${secret_key}/${latitude},${longitude}`)
}

export default getWeatherData