var express = require('express');
var router = express.Router();
var busqueda = [];
const { render, response } = require('../app');
const db = require("../models");
const InfoPartidas= db.infoPartidas;

router.get('/a',async function(req, res, next) {
  let resultados = await InfoPartidas.findAll();
  res.send(resultados);
});

router.get('/b', function(req, res, next) {
  res.send(busqueda);
});

router.post('/', function(req, res, next) {
  busqueda = req.body;
  res.send({
    status : true,
    response : busqueda
  });
});
module.exports = router;
