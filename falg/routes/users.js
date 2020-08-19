var express = require('express');
var router = express.Router();
var cuentas = require('../public/html/user/users.json');
var tablas = require("../models");
var Usuarios = tablas.Users;
var datoslogin = "";
var idusuario = 0;

async function getcuentas(){
  var cuentas = await Usuarios.findAll();
  return cuentas;
}

router.get('/', async function(req, res, next) {
  var cuentas = await getcuentas();
  var cosa = cuentas.dataValues;
  console.log(cuentas);
  res.send({cosa});
});

router.get('/logueado', function(req, res, next) {
  res.send(
    {
      status: true,
      idconectado: idusuario
    }
    );
});

router.put('/login', async function(req, res, next) {
  datoslogin = req.body;
  await User.update({ connect: 1 }, {
    where: {
      id: datoslogin.usuarioid
    }
  });
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
 
router.post('/', async function(req, res, next) {
  var nuevacuenta = req.body;
  var cuentas = await getcuentas();
  await Usuarios.create({ 
    name: nuevacuenta.name,
    password: nuevacuenta.password,
    email: nuevacuenta.email,
    country: nuevacuenta.country,
    sex: nuevacuenta.sex,
    age: nuevacuenta.age,
    description: nuevacuenta.description,
    connect: nuevacuenta.connect
  });
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
