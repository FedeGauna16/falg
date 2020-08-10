var express = require('express');
var router = express.Router();
var publicaciones = require('../public/html/foro/publicaciones.json');
const { render } = require('../app');
var datosirpublicacion = 0;

router.get('/', function(req, res, next) {
   res.send({
    publicaciones : publicaciones,
    });
});

router.post('/', function(req, res, next) {

  publicaciones.push(req.body);

  res.send({
    status : true,
    response : publicaciones
  });
});

/*
router.get('/:idpublicacion', function(req, res, next) {
    res.send({
      status: true,
      idusuario: datosirpublicacion
    }
    );
});
*/
router.get('/irpublicacion/:id', function(req, res, next) {
  var idusuario = req.params.id; 
  var publicacion = publicaciones.find(publicacion => {
    if(publicacion.idusuario == idusuario){
      return true;
    }
  });

  console.log(publicacion);
  res.render('publicacionusuario', { layout: false, publicacion })
});

module.exports = router;