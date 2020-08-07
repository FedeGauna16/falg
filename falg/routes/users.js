var express = require('express');
var router = express.Router();
var cuentas = require('../public/html/user/users.json');
var datoslogin = "";
var cosa = 0;

router.get('/', function(req, res, next) {
   res.send({usuarios : cuentas});
});

router.get('/logueado', function(req, res, next) {
  res.send(
    {
      status: true,
      idconectado: cosa
    }
    );
});

router.put('/login', function(req, res, next) {
  datoslogin = req.body;
  cuentas[datoslogin.usuarioid - 1].conectado = datoslogin.conectado;
  console.log(cuentas);
  cosa = datoslogin.usuarioid;
  console.log(datoslogin.usuarioid);
  console.log(cosa);
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
