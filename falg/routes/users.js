var express = require('express');
var router = express.Router();
var cuentas = require('../public/html/user/users.json');
var datoslogin = "";

router.get('/', function(req, res, next) {
   res.send({usuarios : cuentas});
});

router.put('/login', function(req, res, next) {
  datoslogin = req.body;
  cuentas[datoslogin.usuarioid - 1].conectado = datoslogin.conectado;
  res.send({
    status: true
  });
});

router.put('/', function (req, res, next) {
  datos = req.body;
  cuentas[0].descripcion = datos.descripcion;
});
 
router.post('/', function(req, res, next) {

 cuentas.push(req.body);

  res.send({
    status : true,
    response : cuentas
  });
});

module.exports = router;
