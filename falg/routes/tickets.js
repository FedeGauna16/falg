var express = require('express');
var router = express.Router();
var tickets = []

router.get('/', function(req, res, next) {
   res.send(tickets);
});

router.post('/', function(req, res, next) {

    tickets.push(req.body);

  res.send({
    status : true,
    response : tickets
  });
});

module.exports = router;
