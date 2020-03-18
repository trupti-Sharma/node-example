const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = '535cccfcf9e69b39ed251cd8d35fca9c';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index', { weather: null, error: null });
})

app.post('/', function(req, res) {
  let city = req.body.city;

  let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  request(url, function(err, response, body) {
    let weather = JSON.parse(body)
    if (weather.current.temperature == " ") {
      res.render('index', { weather: null, error: 'Error, please try again' });
    }
    else {
      let weatherText = `It's ${weather.current.temperature} degree {<br/>} ,${weather.current.weather_descriptions[0]}  in ${city}!`;
      res.render('index', { weather: weatherText, error: null });
    }
  });
})

app.listen(8080, function() {
  console.log('Example app listening on port 8080!')
})
