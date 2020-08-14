var express = require('express');
var router = express.Router();
var publicaciones = require('../public/html/foro/publicaciones.json');
const { render, response } = require('../app');

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

router.get('/irpublicacion/:id', function(req, res, next) {
  var idusuario = req.params.id; 
  var publicacion = publicaciones.find(publicacion => {
    return(publicacion.idusuario == idusuario);
  });
  res.render('publicacionusuario', { publicacion })
});

router.get('/foro', function(req, res, next) {
  res.render('foro')
});

router.get('/crearpublicacion', function(req, res, next) {
  res.render('crearpublicacion')
});

module.exports = router;