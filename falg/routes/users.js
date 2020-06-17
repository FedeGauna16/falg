var express = require('express');
var router = express.Router();
var cuentas = []
//FALTA EL INGRESO TAMBIEN COMO CHEQUEA EL COSO LOS DATOS SI EXISTEN O NO

router.get('/', function(req, res, next) {
   res.send(cuentas);
});

router.post('/', function(req, res, next) {

  cuentas.push(req.body);

  res.send({
    status : true,
    response : cuentas
  });
});



module.exports = router;
