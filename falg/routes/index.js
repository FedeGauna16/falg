var express = require('express');
var router = express.Router();
var builds =
[
  {
    titulo : "Tachancka Build 2020",
    descripcion : "Pasate a mirar esta build",
    usuario: "erickjq10x"
  },
]

router.get('/', function(req, res, next) {
   res.render("hola");
});

router.get('/asd', function(req, res, next) {
  var datos = {
    nombre: "silvio",
    apellido: "erick"
  }
  res.render('publicacionusuario',{
     datos
  });
});


module.exports = router;
