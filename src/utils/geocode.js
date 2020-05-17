const request = require('request');


const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoicnMxMjczMiIsImEiOiJja2E5NW45NGIwM3F1MnhwNzlkZWU4cnpvIn0.3-mGjVPAV_SrPtxns0a8Cg';
    request({ url , json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (typeof body.features === 'undefined') {
            // callback('Unable to find location. try another search!', undefined)
            callback(body.message, undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
