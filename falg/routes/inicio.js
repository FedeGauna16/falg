var express = require('express');
var router = express.Router();
var builds =
[
  {
    titulo : "Tachancka Build 2020",
    usuario: "erickjq10x"
  },
  {
    titulo : "Meta-Build Season1",
    usuario: "Josemantas"
  },
  {
    titulo : "Useless Build, but funny",
    usuario: "ChupetinSalado"
  },
]

router.get('/', function(req, res, next) {
   res.send(builds);
});

router.post('/', function(req, res, next) {
  console.log(req);
});


module.exports = router;