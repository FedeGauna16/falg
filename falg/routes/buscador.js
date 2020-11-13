var express = require('express');
var router = express.Router();
var busqueda = [];
const { render, response } = require('../app');
const db = require("../models");
const InfoPartidas= db.infoPartidas;
const Clases = db.clases;
const Items = db.items;
const Users = db.Users;
const Publicacion = db.Posts;

router.get('/a',async function(req, res, next) {
  let resultados = [
    await InfoPartidas.findAll({
      include: [
        {
          model: db.clases
        },
        {
          model: db.items
        },
        {
          model: db.Users
        }
      ] 
    }),
    await Clases.findAll(),
    await Items.findAll(),
    await Users.findAll(),
    await Publicacion.findAll()];
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
