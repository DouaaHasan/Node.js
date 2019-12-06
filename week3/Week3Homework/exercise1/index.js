'use strict';

const fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random')
  .then(response => response.json())
  .then(json => console.log(json.value.joke))
  .catch(err => console.log(err));
