var express = require('express');
var router = express.Router();
var cuentas = require('../public/html/user/users.json');
var cuentalogueada = require('../public/html/cuentas/cuentalogueada.json');

router.get('/', function(req, res, next) {
   res.send({usuarios : cuentalogueada});
});

router.put('/', function (req, res, next) {
  
  datos = req.body;

  cuentas[0].descripcion = datos.descripcion;
  usuarioConectado = usuarios.find(function(usuario){
    return usuario.id == datos.usuarioid
  })

  res.send({
    status: true
  })
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
