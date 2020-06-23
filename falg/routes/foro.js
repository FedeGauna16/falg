var express = require('express');
var router = express.Router();
var publicaciones = require('../public/html/foro/publicaciones.json')

router.get('/', function(req, res, next) {
   res.send(publicaciones);
});

router.post('/', function(req, res, next) {

  cuentas.push(req.body);

  res.send({
    status : true,
    response : publicaciones
  });
});

module.exports = router;