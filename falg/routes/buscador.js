var express = require('express');
var router = express.Router();
const { render, response } = require('../app');
var info = [
  require('../public/html/estadisticas/estadisticas.json'),
  require('../public/html/foro/publicaciones.json'),
  require('../public/html/user/users.json')
];

router.get('/', function(req, res, next) {
  res.send(info);
});

router.get('/buscador', function(req, res, next) {
  res.render('buscador')
});

module.exports = router;
