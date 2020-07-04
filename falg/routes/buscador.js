var express = require('express');
var router = express.Router();
var info = [
  require('../public/html/estadisticas/estadisticas.json'),
  require('../public/html/foro/publicaciones.json'),
  require('../public/html/user/users.json')
];

router.get('/', function(req, res, next) {
  res.send(info);
});


module.exports = router;