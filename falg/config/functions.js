var moment = require('moment')
var tablas = require("../models");
var Comments = tablas.Comments;

exports.converter = (timetoconvert) => { 
    moment.locale('es');
    var time = new moment(timetoconvert);
    var untilNow = time.fromNow(true);
    return untilNow;
};

exports.lengthcommentspost = async (idpost) => {
    var commentpost = await Comments.findAll({
        nest: true,
        raw: true,
        where: {
        idpost: idpost
        }
    });
    console.log("SOS UN REH IJO DE RE MIL PUTA PELTODUO DE MRIDS")
    console.log(commentpost)
    var lengthcommentpost = commentpost.length
    console.log("MOSOSA :CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC")
    console.log(lengthcommentpost)
    return lengthcommentpost;
};