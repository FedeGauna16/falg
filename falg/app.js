var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var inicioRouter = require('./routes/inicio');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { RSA_X931_PADDING } = require('constants');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/inicio', inicioRouter);
app.use('/users', usersRouter);

module.exports = app;
