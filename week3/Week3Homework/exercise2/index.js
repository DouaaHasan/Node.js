'use strict';
const fetch = require('node-fetch');
const url = ' https://restapiabasicauthe-sandbox.mxapps.io/api/books';

fetch(url, {
  headers: { Authorization: 'Basic YWRtaW46aHZnWDhLbFZFYQ==' },
})
  .then(Data => Data.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));
