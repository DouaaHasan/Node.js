'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');

const APIKEY = require('./sources/keys.json').API_KEY;
const PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', async (req, res) => {
  let cityName = req.body.cityName;
  const cityUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;

  try {
    const fetchedCity = await axios.get(cityUrl);
    cityName = fetchedCity.data.name;
    const weatherData = fetchedCity.data;
    const cityTemp = weatherData.main.temp;
    const cityMainWeather = weatherData.weather[0].main;
    const cityWeatherDescription = weatherData.weather[0].description;
    let weatherText;
    weatherText = `${cityName}: Currently the temperature is ${cityTemp} °C, the weather is mainly ${cityMainWeather} and described as ${cityWeatherDescription}.`;
    res.render('index', { weatherText });
  } catch (error) {
    const err = error.response.data.message;
    res.render('index', { err });
  }
});

app.listen(PORT, () => console.log(`This app is listening on port ${PORT}`));
