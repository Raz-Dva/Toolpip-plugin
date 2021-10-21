var express = require('express');
var path = require('path');
var app = express();
const PORT = process.env.PORT || 5000;


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// set path for static assets
// app.use(express.static(path.join(__dirname, '/')));


// routes
app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile('index.html');
});

app.use("*", function (req, res) {
  res.sendFile('404.html', { root: __dirname });
});

app.listen(PORT, () => { console.log('Server has been started!!! port-' + PORT) });