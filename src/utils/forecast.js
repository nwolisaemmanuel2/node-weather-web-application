const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/43c040c3fbe023beffd086226f2dbbdd/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to our weather service', undefined)
        } else if (body.error){
            callback('unable to find location', undefined)
        } else {
            
            callback(undefined, body.daily.data[0].summary + ' it is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a Low of ' + body.daily.data[0].temperatureLow + ', there is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })

}

module.exports = forecast
