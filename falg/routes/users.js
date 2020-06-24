var express = require('express');
var router = express.Router();
var cuentas = require('./users.json')

router.get('/', function(req, res, next) {
   res.send(cuentas);
});

router.post('/', function(req, res, next) {

 cuentas.cuentas.push(req.body);

  res.send({
    status : true,
    response : cuentas
  });
});

module.exports = router;
