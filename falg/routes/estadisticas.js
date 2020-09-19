var express = require('express');
var router = express.Router();
//var infoEstadisticas = require('../public/html/estadisticas/estadisticas.json')
const { render, response } = require('../app');
const db = require("../models");
const InfoPartidas= db.infoPartidas;
const Clases = db.clases;
const Jugadores = db.jugadores;
/*
router.get('/', function(req, res, next) {
  res.send(infoEstadisticas);
});

router.get('/:tipo', function(req, res, next) {
    res.send(req.params.tipo);
});

router.post('/:tipo', function(req, res, next) { 

    switch(req.params.tipo){
      case "infoPartidas":
        infoEstadisticas.infoPartidas.push(req.body);  
      break;
      case "clases":
        infoEstadisticas.clases.push(req.body);  
      break;
      case "jugadores":
        infoEstadisticas.jugadores.push(req.body);  
      break;
    }

  res.send({
    status : true,
    response : infoEstadisticas 
  });
});

router.get('/cosa', function(req, res, next) {
  res.render('estadisticas')
});
*/
router.get('/:tipo',async function(req, res, next) {
  let resultados1 = await InfoPartidas.findAll();
  let resultados2 = await Clases.findAll();
  let resultados3 = await Jugadores.findAll();

  switch(req.params.tipo){
    case "infoPartidas":
      res.send({ 
        response : resultados1
      });
    break;
    case "clases":
      res.send({ 
        response : resultados2
      }); 
    break;
    case "jugadores":
      res.send({ 
        response : resultados3
      });  
    break;
  }
  });/*
  router.get('/',async function(req, res, next) {
    let resultados = await InfoPartidas.findAll();
  
    res.send(resultados);
});
*/
module.exports = router;
