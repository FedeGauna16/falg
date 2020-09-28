var express = require('express');
var router = express.Router();
const { render, response } = require('../app');

router.get('/', function(req, res, next) {
   res.render("hola");
});

router.get('/asd', function(req, res, next) {
  var datos = {
    nombre: "silvio",
    apellido: "erick"
  }
  res.render('publicacionusuario',{
     datos
  });
});

router.get('/index', function(req, res, next) {
  res.render('index')
});

router.get('/crearpublicacion', function(req, res, next) {
  res.render('crearpublicacion')
});

router.get('/descarga', function(req, res, next) {
  res.render('descarga')
});

router.get('/faq', function(req, res, next) {
  res.render('faq')
});

router.get('/formulario', function(req, res, next) {
  res.render('formulario')
});

router.get('/soporte', function(req, res, next) {
  res.render('soporte')
});

router.get('/terminosycondiciones', function(req, res, next) {
  res.render('terminosycondiciones')
});

router.get('/estadisticas', function(req, res, next) {
  res.render('estadisticas')
});

router.get('/buscador', function(req, res, next) {
  res.render('buscador')
});

router.get('/items', function(req, res, next) {
  res.render('items')
});
module.exports = router;
