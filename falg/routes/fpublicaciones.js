var express = require('express');
var router = express.Router();
var publicaciones = require('../public/html/foro/publicaciones.json')
var usuario = require('./cuentalogueada.json')

router.get('/', function(req, res, next) {
   res.send({
    publicaciones : publicaciones,
    usuarios : usuario
    }); 
});

router.post('/', function(req, res, next) {

  publicaciones.push(req.body);

  res.send({
    status : true,
    response : publicaciones
  });
});

module.exports = router;