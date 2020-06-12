var express = require('express');
var router = express.Router();
var hola = "hlasosputo";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(
    {
      status: true,
      response: hola,
    }
  );
});

module.exports = router;
