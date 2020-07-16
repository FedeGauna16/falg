var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var inicioRouter = require('./routes/inicio');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ticketsRouter = require('./routes/tickets');
var estadisticasRouter = require('./routes/estadisticas');
var fpublicacionesRouter = require('./routes/fpublicaciones');
var buscadorRouter = require('./routes/buscador');
var perfilRouter = require('./routes/perfil');
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
app.use('/fpublicaciones', fpublicacionesRouter);
app.use('/buscador', buscadorRouter);
app.use('/perfil', perfilRouter);
 
module.exports = app;
