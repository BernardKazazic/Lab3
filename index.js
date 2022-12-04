const express = require('express');
const externalUrl = process.env.RENDER_EXTERNAL_URL;
const port = externalUrl && process.env.PORT ? parseInt(process.env.PORT) : 4080;

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/hitmarker', (req, res) => {
    res.sendFile(__dirname + '/hitmarker.mp3');
});

if (externalUrl) {
  const hostname = '127.0.0.1';
  app.listen(port, hostname, () => {
  console.log(`Server locally running at http://${hostname}:${port}/ and from
  outside on ${externalUrl}`);
  });
}
else {
    https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
    }, app)
    .listen(port, function () {
    console.log(`Server running at https://localhost:${port}/`);
  });
}
    