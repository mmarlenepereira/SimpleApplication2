var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);


// handle about route
// This route is already defined in the about.js route file, so remove it from here
// app.get('/about', function(req, res) {
//   res.render('about', { title: 'About Us' });
// });

// handle contact route
// This route is already defined in the contact.js route file, so remove it from here
// app.get('/contact', function(req, res) {
//   res.render('contact', { title: 'Contact Us' });
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
