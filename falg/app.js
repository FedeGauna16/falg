var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var inicioRouter = require('./routes/inicio');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ticketsRouter = require('./routes/users');
var estadisticasRouter = require('./routes/estadisticas');
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
app.use('/tickets', ticketsRouter);
app.use('/estadisticas', estadisticasRouter);
 
module.exports = app;
