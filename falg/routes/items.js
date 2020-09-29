var express = require('express');
var router = express.Router();
const { render, response } = require('../app');
const db = require("../models");
const Items= db.items;

router.get('/a',async function(req, res, next) {
  let resultados = await Items.findAll();
  res.send(resultados);
});

module.exports = router;