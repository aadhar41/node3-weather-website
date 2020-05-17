const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=eb5d4b2d9e4c4126998120207201605&q=' + lat + ',' + long;

    request({ url, json: true }, (error, { body }) => {
        // console.log(response);
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback("Unable to find location.", undefined);
        } else {
            const currentTemp = body.current.temp_c;
            const text = body.current.condition.text;
            callback(undefined, "It is currently " + currentTemp + " degrees out and " + text);
        }
    })
}

module.exports = forecast;
