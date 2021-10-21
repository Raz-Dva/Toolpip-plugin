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
app.use('/', function(req, res){
  res.set('Content-Type', 'text/html');
  res.sendFile('index.html');
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error', {status:err.status, message:err.message});
// });

// app.get('*', function (req, res) {
//   res.status(404).type('text/html');
//   res.send("<h1> Not found 404</h1>");
// });

app.use('*', function(req, res){
  res.status(404).sendFile('./404.html');
});

// app.get('*', (req, res) => res.send('Page Not found 404'));

app.listen(PORT, () => { console.log('Server has been started!!! port-' + PORT) });