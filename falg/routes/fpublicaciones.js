var express = require('express');
var router = express.Router();
var publicaciones = []

router.get('/', function(req, res, next) {
   res.send(publicaciones);
});

router.post('/', function(req, res, next) {

  publicaciones.push(req.body);

  res.send({
    status : true,
    response : publicaciones
  });
});

module.exports = router;
//require('../public/html/foro/publicaciones.json')