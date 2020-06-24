var express = require('express');
var router = express.Router();
var cuentas = require('./users.json')
var cuentalogueada = require('./cuentalogueada.json')

router.get('/', function(req, res, next) {
   res.send(cuentas);
});

router.post('/', function(req, res, next) {

 cuentas.push(req.body);
 cuentalogueada.cuentalogueada.push(req.body);


  res.send({
    status : true,
    response : cuentas
  });
});

module.exports = router;
