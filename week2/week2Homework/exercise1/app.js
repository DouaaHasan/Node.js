'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const app = express();
app.use(express.json());

function isInvalid(req) {
  if (
    typeof req.body === 'undefined' ||
    typeof req.body.title === 'undefined' ||
    typeof req.body.content === 'undefined'
  ) {
    return true;
  } else {
    return false;
  }
}

// create
app.post('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  if (isInvalid(req)) {
    res.status(400);
    res.send('invalid');
    return;
  }
  fs.writeFileSync(title, content);
  res.end('ok');
});

// update
app.put('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok');
  } else {
    res.status(400);
    res.end('post does not exist');
  }
});

//delete
app.delete('/blogs/:title', (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    res.status(400);
    res.end('post not found!');
  }
});

//read
app.get('/blogs/:title', (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(title)) {
    res.sendFile(path.join(__dirname, `./${title}`));
  } else {
    res.status(400);
    res.end('post not found!');
  }
});

app.listen(PORT, () => console.log(`This app is listening on port: ${PORT}!`));
