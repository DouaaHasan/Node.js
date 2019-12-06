'use strict';

const fetch = require('node-fetch');

const urlParty = 'https://reservation100-sandbox.mxapps.io/api/reservations';

const invitationData = {
  name: 'Dua',
  numberOfPeople: 3,
};
const bodyJsonData = JSON.stringify(invitationData);

const options = {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  body: bodyJsonData,
};

fetch(urlParty, options)
  .then(response => response.text())
  .then(json => console.log(json))
  .catch(error => console.log(error));
