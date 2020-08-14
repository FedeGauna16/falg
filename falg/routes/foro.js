var express = require('express');
var router = express.Router();
var forolista = require('../public/html/foro/foro.json');
//var publicaciones = require('../public/html/foro/foro.json');
//var comentarios = require('../public/html/foro/foro.json');
const { render, response } = require('../app');
var comentario = [];

router.get('/', function(req, res, next) {
   res.send(forolista);
});

router.post('/publicaciones', function(req, res, next) {
  forolista[0].publicaciones.push(req.body);
  res.send({
    status : true,
  });
});

router.get('/irpublicacion/:id', function(req, res, next) {
  var idusuario = req.params.id; 
  var publicacion = forolista[0].publicaciones.find(publicacion => {
    return(publicacion.idusuario == idusuario);
  });
  console.log(comentario);
  res.render('publicacionusuario', { publicacion: publicacion, comentario: comentario })
}); 

router.post('/subircomentario', function(req, res, next) {
  comentario = req.body.datos;
  console.log(req.body.datos);
  forolista[0].comentarios.push(comentario);
  res.sendStatus(200);
});

router.get('/foro', function(req, res, next) {
  res.render('foro')
});

router.get('/crearpublicacion', function(req, res, next) {
  res.render('crearpublicacion')
});

module.exports = router;