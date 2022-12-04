const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/hitmarker', (req, res) => {
    res.sendFile(__dirname + '/hitmarker.mp3');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});