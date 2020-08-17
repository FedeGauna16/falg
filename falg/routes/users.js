var express = require('express');
var router = express.Router();
var cuentas = require('../public/html/user/users.json');
var datoslogin = "";
var idusuario = 0;
const { render, response } = require('../app');

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
  cuentas[datoslogin.usuarioid].conectado = datoslogin.conectado;
  idusuario = datoslogin.usuarioid;
  res.send({
    status: true
  });
});

router.put('/perfil', function (req, res, next) {
  datos = req.body;
  cuentas[0].descripcion = datos.descripcion;//CORREGIR EL 0 este de mierad pelotudo
  res.send({
    status : true
  });
});
 
router.post('/', function(req, res, next) {

 cuentas.push(req.body);

  res.send({
    status : true,
    response : cuentas
  });
});

router.get('/registro', function(req, res, next) {
  res.render('registro')
});

router.get('/ingreso', function(req, res, next) {
  res.render('ingreso')
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil')
});

module.exports = router;
