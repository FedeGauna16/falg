var express = require('express');
var router = express.Router();
var cuentas = require('../public/html/user/users.json');
var cuentalogueada = require('../public/html/cuentas/cuentalogueada.json');

router.get('/', function(req, res, next) {
   res.send(cuentas);
});

router.post('/', function(req, res, next) {

 cuentas.push(req.body);
 cuentalogueada.push(req.body);

  res.send({
    status : true,
    response : cuentas
  });
});

module.exports = router;
