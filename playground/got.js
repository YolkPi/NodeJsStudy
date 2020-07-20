const fs = require('fs');
const got = require('got');

const forcastRe = 'http://api.weatherstack.com/forecast?access_key=84cc6bcc02e773ec1be9ff3b2592474d&query=San%Francisco&forecast_days=1&hourly=1';
const currentRe = 'http://api.weatherstack.com/current?access_key=84cc6bcc02e773ec1be9ff3b2592474d&query=San%20Francisco&units=s';


(async () => {
    try {
        const response = await got(currentRe);
        //console.log(JSON.parse(response.body));
        fs.writeFileSync('test.json', response.body);

        analysis(JSON.parse(response.body));
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        fs.writeFileSync('test.json', erroe.response.body);
        //=> 'Internal server error ...'
    }
})();

const analysis = function(responseBody){
    console.log('current degree is : ' + responseBody.current.temperature);
    console.log('current weather is ' + responseBody.current.weather_descriptions);
}

const reque = "https://api.mapbox.com/geocoding/v5/mapbox.places/University%20of%20San%20Francisco.json?access_token=pk.eyJ1IjoiamNwaSIsImEiOiJja2N0djg5YmIwaHh4MzNwZmFzaWg4aHh1In0.B-uvQRc-PZlkVqILIaWhEQ";

(async () => {
    try {
        const response = await got(reque);
        //console. log(JSON.parse(response.body));
        fs.writeFileSync('test.json', response.body);

        console.log(JSON.parse(response.body))
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        fs.writeFileSync('test.json', erroe.response.body);
        //=> 'Internal server error ...'
    }
})();

const geoCode = (address, callback) => {
    (async () => {
        try {
            const response = await got(reque);
            //console. log(JSON.parse(response.body));
            fs.writeFileSync('test.json', response.body);
    
            console.log(JSON.parse(response.body))
            //=> '<!doctype html> ...'
        } catch (error) {
            console.log(error.response.body);
            fs.writeFileSync('test.json', erroe.response.body);
            //=> 'Internal server error ...'
        }
    })();
}

// (async () => {
//     const body = await got.post('http://api.weatherstack.com/current?access_key=84cc6bcc02e773ec1be9ff3b2592474d&query=San%20Francisco'
//     , {

//     })
// })();