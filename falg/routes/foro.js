var express = require('express');
var router = express.Router();
var forolista = require('../public/html/foro/foro.json');
const { render, response } = require('../app');

router.get('/', function(req, res, next) {
   res.send(forolista);
});

router.post('/publicaciones', function(req, res, next) {
  forolista[0].publicaciones.push(req.body);
  res.send({
    status : true,
  });
});

router.get('/irpublicacion/:idpublicacion', function(req, res, next) {
  var idpublicacion = req.params.idpublicacion;
  var publicacion = forolista[0].publicaciones.find(publicacion => {
    return(publicacion.idpublicacion == idpublicacion);
  });
  var comentario = forolista[0].comentarios.find(comentario => {
    return(comentario.idpublicacion == idpublicacion);
  });
  console.log(comentario)
  res.render('publicacionusuario', { publicacion: publicacion, comentario: comentario})
});

router.post('/subircomentario', function(req, res, next) {
  forolista[0].comentarios.push(req.body);
  res.sendStatus(200);
});

router.get('/foro', function(req, res, next) {
  res.render('foro')
});

router.get('/crearpublicacion', function(req, res, next) {
  res.render('crearpublicacion')
});

module.exports = router;