var express = require('express');
var router = express.Router();
var infoEstadisticas = require('../public/html/estadisticas/estadisticas.json')
var info;
router.get('/', function(req, res, next) {
  res.send(infoEstadisticas);
});

router.get('/:tipo', function(req, res, next) {
    res.send(req.params.tipo);
});

router.post('/:tipo', function(req, res, next) { 

    switch(req.params.tipo){
      case "infoPartidas":
        infoEstadisticas.infoPartidas.push(req.body);  
      break;
    }


    //infoEstadisticas.req.params.push(req.body);

  res.send({
    status : true,
    response : infoEstadisticas 
  });
});

module.exports = router;
