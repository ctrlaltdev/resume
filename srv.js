var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var genRouter = require('./routes/gen');
var pdfRouter = require('./routes/pdf');

var srv = express();

// view engine setup
srv.set('views', path.join(__dirname, 'views'));
srv.set('view engine', 'pug');

srv.use(logger('dev'));
srv.use(express.json());
srv.use(express.urlencoded({ extended: false }));
srv.use(cookieParser());
srv.use(express.static(path.join(__dirname, 'public')));

srv.use('/', indexRouter);
srv.use('/gen/', genRouter);
srv.use('/pdf/', pdfRouter);

// catch 404 and forward to error handler
srv.use(function(req, res, next) {
  next(createError(404));
});

// error handler
srv.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = srv;
