'use strict';

const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => res.send('hello from backend to frontend!'));

app.listen(PORT, () => console.log(`This app is listening on port ${PORT}!`));
