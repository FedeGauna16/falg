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
   res.send(builds);
});

router.post('/', function(req, res, next) {
  
});


module.exports = router;
