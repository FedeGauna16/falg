var moment = require('moment')
var tablas = require("../models");

exports.converter = (timetoconvert) => { 
    moment.locale('es');
    var time = new moment(timetoconvert);
    var untilNow = time.fromNow(true);
    return untilNow;
};

exports.lengthcommentspost = (comments, idpost) => {
    const lengthcommentpost = comments.filter(comment => {
        return comment.idpost == idpost
    }).length;
    return lengthcommentpost
};

exports.lengthpostsuser = (posts, iduser) => {
    const lengthpostuser = posts.filter(post => {
        return post.iduser == iduser
    }).length;
    return lengthpostuser
};
