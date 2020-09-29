var express = require('express');
var router = express.Router();
var cuentas = require('../public/html/user/users.json');
var tablas = require("../models");
var Usuarios = tablas.Users;
var Reportes = tablas.Reports;
var datoslogin = "";

async function getcuentas(){
  var cuentas = await Usuarios.findAll({
    nest: true,
    raw: true
  });
  return cuentas;
}

router.get('/', async function(req, res, next) {
  var cuentas = await getcuentas();
  res.send({cuentas});
});

router.get('/logueado', function(req, res, next) {
  res.send(
    {
      status: true,
      idconectado: idusuario
    }
    );
});

router.get('/logout', async function(req, res){
  req.app.locals.userlogged = 0;
  await Usuarios.update({ connect: 0 }, {
    where: {
      id: datoslogin.usuarioid
    }
  });
  res.redirect("http://localhost:3000/index/index")
})

router.put('/login', async function(req, res, next) {
  datoslogin = req.body;
  await Usuarios.update({ connect: 1 }, {
    where: {
      id: datoslogin.usuarioid
    }
  });
  req.app.locals.userlogged = await Usuarios.findOne(
    {
      raw: true,
      nest: true,
      where: {
        id: datoslogin.usuarioid
      }
    }
  )
  res.send({
    status: true
  });
});

router.put('/perfil', async function (req, res, next) {
  userData = req.body;
  await Usuarios.update({
    name: userData.name,
    description: userData.description,
    email: userData.email,
    country: userData.country,
    sex: userData.sex,
    age: userData.age,
  }, {
    where: {
      connect: 1
    }
  });
  req.app.locals.userlogged = await Usuarios.findOne(
    {
      raw: true,
      nest: true,
      where: {
        id: datoslogin.usuarioid
      }
    }
  )
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

router.put('/changePass/:userid', async function (req, res, next) {
  var userid = req.params.userid;
  var newpass = req.body.newPassword
  await Usuarios.update({
    password: newpass,
  }, {
    where: {
      id: userid
    }
  });
  res.send({
    status : true
  });
});

router.get('/perfilraronoseayuda/:coso', async function (req, res, next) {
  var coso = req.params.coso
  console.log(coso)
});

router.get('/registro', function(req, res, next) {
  res.render('registro')
});

router.get('/ingreso', async function(req, res, next) {
  var query = await getcuentas();
  var cuentas = query.dataValues;
  res.render('ingreso', {cuentas})
});

router.get('/perfil/:idprofile', async function(req, res, next) {
  var users = await getcuentas();
  var idprofile = req.params.idprofile;
  var profile = users.find(profile => {
    return(profile.id == idprofile);
  }); 
  res.render('perfil', {profile})
});

module.exports = router;
