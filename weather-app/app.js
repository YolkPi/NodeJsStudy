const fs = require('fs');
const got = require('got');

const geoCode = (address, callback) => {
        const reque = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
        + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamNwaSIsImEiOiJja2N0djg5YmIwaHh4MzNwZmFzaWg4aHh1In0.B-uvQRc-PZlkVqILIaWhEQ'
         + '&limit=1';
        (async () => {
        try {
            const response = await got(reque);
            //console. log(JSON.parse(response.body));
            //fs.writeFileSync('test.json', response.body);
    
           //console.log(JSON.parse(response.body));
            //=> '<!doctype html> ...'

            callback(JSON.parse(response.body).features[0].geometry.coordinates);
        } catch (error) {
            console.log(error.response);
            //fs.writeFileSync('test.json', erroe.response.body);
            //=> 'Internal server error ...'
        }
        })();
}

const getweather = function(coordinate){
   // console.log(coordinate);

     const currentRe = 'http://api.weatherstack.com/current?access_key=84cc6bcc02e773ec1be9ff3b2592474d'
      + '&query=' + encodeURIComponent(coordinate[1]) + ',' + encodeURIComponent(coordinate[0])
       + '&units=m';

    // const currentRe = 'http://api.weatherstack.com/current?access_key=84cc6bcc02e773ec1be9ff3b2592474d'
    // + '&query=' + encodeURIComponent('san francisco');

     //console.log(currentRe);

    (async () => {
        try {
            const responseString = await got(currentRe);
            const responseBodyObject = JSON.parse(responseString.body);
            //console.log(JSON.parse(response.body));
            //fs.writeFileSync('test.json', response.body);

            console.log('current degree is : ' + responseBodyObject.current.temperature);
            console.log('current weather is ' + responseBodyObject.current.weather_descriptions);
            //=> '<!doctype html> ...'
        } catch (error) {
            console.log(error);
            //fs.writeFileSync('test.json', erroe.response.body);
            //=> 'Internal server error ...'
        }
    })();
}

geoCode('Asan, Korea', getweather);


