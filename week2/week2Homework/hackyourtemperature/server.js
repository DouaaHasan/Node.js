'use strict';

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.get('/', (req, res) => {
  res.render('Layouts/index');
});

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  if (!cityName) {
    res.status(400);
    res.send('invalid, please enter a city name');
    return;
  } else {
    res.send(cityName);
  }
});

app.listen(PORT, () => console.log(`This app is listening on port ${PORT}!`));
