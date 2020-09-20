var express = require('express');
var router = express.Router();
var tablas = require("../models");
var Reports = tablas.Reports;

async function getreports(){
  var reports = await Reports.findAll({
    nest: true,
    raw: true
  });
  return reports;
}

router.get('/', function(req, res, next) {
   res.send(tickets);
});

router.post('/createreport',async function(req, res, next) {
  var newreport = req.body;
  var reports = await getreports();
  await Reports.create({ 
    description: newreport.description,
    iduser: newreport.iduser
  });
  res.send({
    status : true,
    response : reports
  });
});


module.exports = router;
