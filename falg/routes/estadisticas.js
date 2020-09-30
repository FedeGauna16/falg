var express = require('express');
var router = express.Router();
//var infoEstadisticas = require('../public/html/estadisticas/estadisticas.json')
const { render, response } = require('../app');
const db = require("../models");
const InfoPartidas = db.infoPartidas;
const Clases = db.clases;
const Jugadores = db.jugadores;

router.get('/a',async function(req, res, next) {
  let resultados = await InfoPartidas.findAll();
  res.send(resultados);
});

router.get('/:tipo',async function(req, res, next) {
  let resultados1 = await InfoPartidas.findAll({
    include: [
      {
        model: db.clases,
        model: db.items
      }
    ] 
  });
  let resultados2 = await Clases.findAll();
  let resultados3 = await Jugadores.findAll({
    include: {
      model: db.Users
    }
  });

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
  });

module.exports = router;
