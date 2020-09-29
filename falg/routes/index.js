var express = require('express');
var router = express.Router();
const { render, response } = require('../app');

router.get('/changa', async function(req, res, next) {
  var tablas = require("../models");
  await tablas.Usersposts.drop()
  await tablas.Posts.drop()
  await tablas.Userscomments.drop()
  await tablas.Users.drop()
  await tablas.Comments.drop()
  res.send("se elimino todo carajo");
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
