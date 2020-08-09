var express = require('express');
var router = express.Router();
var cuentas = require('../public/html/user/users.json');
var datoslogin = "";
var idusuario = 0;

router.get('/', function(req, res, next) {
   res.send({usuarios : cuentas});
});

router.get('/logueado', function(req, res, next) {
  res.send(
    {
      status: true,
      idconectado: idusuario
    }
    );
});

router.put('/login', function(req, res, next) {
  datoslogin = req.body;
  console.log(datoslogin);
  cuentas[datoslogin.usuarioid - 1].conectado = datoslogin.conectado;
  idusuario = datoslogin.usuarioid;
  res.send({
    status: true
  });
});

router.put('/perfil', function (req, res, next) {
  datos = req.body;
  cuentas[0].descripcion = datos.descripcion;
  res.send({
    status : true,
  });
});
 
router.post('/', function(req, res, next) {

 cuentas.push(req.body);

  res.send({
    status : true,
    response : cuentas
  });
});

module.exports = router;
