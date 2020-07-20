const got = require('got');
const fs = require('fs');

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

const results = JSON.parse(fs.readFileSync('test.json'));

results.features.forEach(element => {
    console.log(element.text);
});