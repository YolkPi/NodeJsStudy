const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./weatherUtils');
const { env } = require('process');

const app = express();

//GET the port number that setted by heroku
const port = process.env.PORT || 8080;

//setup view engine
app.set('view engine', 'hbs');

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, '../public'));
//specify/customize the path
const viewsPath = path.join(__dirname, '/templates/views');
app.set('views', viewsPath);

const partialsPath = path.join(__dirname, '/templates/partials');
hbs.registerPartials(partialsPath);

const publicDirectory = path.join(__dirname, '../public');

//setup static directory to serve
app.use(express.static(publicDirectory));

// //two parameter:
// //1: the path
// //2: the logic when we reach the path
// app.get('', (reqest, response) =>{
//     const resObject = {
//         name: 'chenchenPi',
//         word: 'hello'
//     }
//     //will automitically transform object to json and send
//     response.send([resObject, {
//         name: 'fdd',
//         agr: 11
//     }]);
// });

// app.get('/help', (reqest, response) =>{
//     response.send('Hello there, may I help you?');
// });

// app.get('/weather', (reqest, response) =>{
//     response.send('Hello there, may I help you?');
// });

//app.com
// app.com/help
// app.com/about

//use view engine
app.get('', (req, res) => {
    res.render('index', {
        title: 'my title',
        name: 'Jiachen'
    });
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'address is required'
        });
    }

    geocode.geoCode(req.query.address, (coordinate) => {
        geocode.getweather(coordinate, (result) => {
            res.send({
                temperature : result.temperature,
                description : result.description,
                location: req.query.address,
                icon: result.icon
            });
        })
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'my title',
        weather_description: 'Cloud',
        temperature: 16,
        name: 'Jiachen'
    });
})

app.get('/help/*', (req, res) => {
    res.send('Sorry, article not found');
})

//customize my 404 page
//nodejs will find a page from top to buttom.
//means that if we move it above /help, the request /help will be 
//responsed by this function
app.get('*', (req, res) => {
    res.send('Sorry, there is a 404 problem');
});

//start the server up
app.listen(port, () => {
    console.log('port ' + port + ' starting')
});