var express = require('express');
var router = express.Router();
var infoPartidas = [
  {
      jugador1: {
        nombre: "manuel",
        iconPJ:"./estadisticas/lucas.jpeg", 
        items: {
         item1: "./estadisticas/cave.jpeg",
         item2: "./estadisticas/cave.jpeg",
         item3: "./estadisticas/cave.jpeg",
         item4: "./estadisticas/cave.jpeg",
         item5: "./estadisticas/cave.jpeg",
         item6: "./estadisticas/cave.jpeg"
        }
      },
      jugador2: {
        nombre: "manuel",
        iconPJ:"./estadisticas/lucas.jpeg", 
        items: {
          item1: "./estadisticas/cave.jpeg",
          item2: "./estadisticas/cave.jpeg",
          item3: "./estadisticas/cave.jpeg",
          item4: "./estadisticas/cave.jpeg",
          item5: "./estadisticas/cave.jpeg",
          item6: "./estadisticas/cave.jpeg"
         }
      }
  },
]
var clases = [
  {
    nombre: "nombre",
    winrate: "algo (%)",
    loserate: "algo (%)",
    iconClass: "./estadisticas/rakan.png"
  },
]
var jugadores = [
  {
    nombre: "nombre",
    winrate: "100% Win rate",
    iconPlayer: "./estadisticas/cave2.jpeg"
  },
]

router.get('/1', function(req, res, next) {
  res.send(infoPartidas);
});
router.get('/2', function(req, res, next) {
  res.send(clases);
});
router.get('/3', function(req, res, next) {
  res.send(jugadores);
});

router.post('/1', function(req, res, next) {

    infoPartidas.push(req.body);

  res.send({
    status : true,
    response : infoPartidas
  });
});
router.post('/2', function(req, res, next) {

  clases.push(req.body);

res.send({
  status : true,
  response : clases
});
});
router.post('/3', function(req, res, next) {

  jugadores.push(req.body);

res.send({
  status : true,
  response : jugadores
});
});

module.exports = router;
