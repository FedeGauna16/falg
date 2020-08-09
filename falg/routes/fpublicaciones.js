var express = require('express');
var router = express.Router();
var publicaciones = require('../public/html/foro/publicaciones.json');
var datosirpublicacion = 0;

router.get('/', function(req, res, next) {
   res.send({
    publicaciones : publicaciones,
    });
});

router.post('/', function(req, res, next) {

  publicaciones.push(req.body);

  res.send({
    status : true,
    response : publicaciones
  });
});

router.get('/publicacionusuario', function(req, res, next) {
  res.send(
    {
      status: true,
      idusuario: datosirpublicacion
    }
    );
});

router.put('/irpublicacion', function(req, res, next) {
  datosirpublicacion = req.body;
  console.log(datosirpublicacion);
  res.send({
    status: true
  });
});

module.exports = router;