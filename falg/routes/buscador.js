var express = require('express');
var router = express.Router();
const { render, response } = require('../app');
const db = require("../models");
const InfoPartidas= db.infoPartidas;

router.get('/',async function(req, res, next) {
  let resultados = await InfoPartidas.findAll();

  res.send(resultados);
});

module.exports = router;
