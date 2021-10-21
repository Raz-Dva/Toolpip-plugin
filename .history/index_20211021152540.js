var express = require('express');
var path = require('path');
// var logger = require('morgan');
// var index = require('./routes/index');
var app = express();
const PORT = process.env.PORT || 5000;


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, '/')));


// routes
app.use('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.sendFile('index.html');
  next();
});
app.use("/contact", function (request, response) {

  response.send("<h1>Контакты</h1>");
});

// app.get('*', (req, res) => res.send('Page Not found 404'));

app.listen(PORT, () => { console.log('Server has been started!!! port-' + PORT) });