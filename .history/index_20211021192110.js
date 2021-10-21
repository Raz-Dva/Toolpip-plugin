const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/')));

// routes
app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname + '/index.html');
});

app.use("*", function (req, res) {
  res.sendFile(__dirname + '/404.html');
});

app.listen(PORT, () => { console.log('Server has been started!!! port-' + PORT) });