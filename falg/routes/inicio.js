var express = require('express');
var router = express.Router();
var busqueda = [];

router.get('/', function(req, res, next) {
   res.send(builds);
});
router.get('/b', function(req, res, next) {
  res.send(busqueda);
});

router.post('/', function(req, res, next) {
  busqueda = req.body;
  console.log(busqueda);
  res.send({
    status : true,
    response : busqueda
  });
});


module.exports = router;