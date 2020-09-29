var express = require('express');
var router = express.Router();
var tablas = require("../models");
const posts = require('../models/posts');
var Users = tablas.Users;
var Posts = tablas.Posts;
var Comments = tablas.Comments;
var Userscomments = tablas.Userscomments
var Usersposts = tablas.Usersposts
let views = 0;
var userbannedlike = []
var userbanneddislike = []
var userbannedlikecomment = []
var userbanneddislikecomment = []

async function getposts(){
  //req.app.locals.posts = 0; como mierda hago la variable global intente aca pero no arranca bien
  var posts = await Posts.findAll({
    nest: true,
    raw: true,
    include: [
      {
          model: Users,
          as: "user",
      }
  ]
  });
  //req.app.locals.posts = posts
  return posts;
}

async function getrecentposts(){
  var posts = await Posts.findAll({
    nest: true,
    raw: true,
    limit: 4,
    order: [
      ['createdAt', 'DESC']
    ],
    include: [
      {
          model: Users,
          as: "user",
      }
  ]
  });
  return posts;
}

async function getcomments(){
  var comments = await Comments.findAll({
    nest: true,
    raw: true,
    include: [
      {
          model: Users,
          as: "user",
      }
  ]
  });
  return comments;
}

router.get('/', async function(req, res, next) {
  var posts = await getposts();
  //console.log(posts);
  res.send({posts});
});

router.get('/comments', async function(req, res, next) {
  var comments = await getcomments();
  res.send({comments});
});

router.post('/publicaciones', async function(req, res, next) {
  var newpost = req.body;
  var posts = await getposts();
  var comments = await getcomments();
  var post = await Posts.create({
    title: newpost.title,
    description: newpost.description,
    iduser: newpost.iduser,
    filter: newpost.filter
  });
  var comentario = comments.filter(comentario => {
    return(comentario.idpost == newpost.id);
  });
  var lengthcomments = comentario.length
  console.log("SOS VOS MAMITA LIND?")
  console.log(lengthcomments)
  await Usersposts.create({
    postid: post.id, 
    userid: newpost.iduser
  });
  res.send({
    status : true,
    response : lengthcomments
  });
});

router.get('/goToPage/:idPage', async function(req, res, next) {
    var id = req.params.idPage
    res.render('foro', { id })
  });

router.get('/irpublicacion/:idpublicacion', async function(req, res, next) {
  var posts = await getposts();
  var comments = await getcomments();
  var idpublicacion = req.params.idpublicacion;
  var publicacion = posts.find(publicacion => {
    return(publicacion.id == idpublicacion);
  });
  var comentario = comments.filter(comentario => {
    return(comentario.idpost == idpublicacion);
  });
  var lengthcomments = comentario.length
  res.render('publicacionusuario', {publicacion, comentario, lengthcomments})
  views++;// Si se entra a una misma publicacion se sigue sumando los views, no quiero hacer que cuando publicacion que se bloquee o algo asi
  //no hay una mejor forma mas linda sin tener qe hacerlo con el ++ y el bloqueo ese?
  //alta paja hacerlo ahora chapotear despues
});

router.get('/filter/:filter', async function(req, res, next) {
  var posts = await getposts();
  var filter = req.params.filter;
  var publications = posts.filter(publication => {
    return(publication.filter == filter);
  });
  res.render('foro', {publications, filter})
});

router.post('/subircomentario', async function(req, res, next) {
  var newcomment = req.body;
  var comment = await Comments.create({ 
    nest: true,
    raw: true,
    idpost: newcomment.idpost,
    comment: newcomment.comment
  });
  await Userscomments.create({
    commentid: comment.id, 
    userid: newcomment.iduser
  });
  res.send({
    status : true
  });
});

/*async function typediscount(idtype, typelike, table, coso){
  likeDislike("dislike")

}

async function typeaddcount(idpost, typelike, table){
  await table.update({ likes: typelike + 1 }, {
    where: {
      id: idpost
    }
  });
}*/

router.get('/addlikepost/:like/:iduser', async function(req, res, next) {
  var idpost = req.params.like
  var iduser = req.params.iduser
  var userlike = await Posts.findByPk(idpost)
  var userIndex = userbannedlike.indexOf("iduser")
  console.log("WOWLOWLO")
  console.log(userbannedlike)
  console.log(userIndex)
  if(userbannedlike[0] == iduser){
    console.log("SOS UN RE HIJO DE REMIL PUTA CHAVON")
    //dislike(idpost, Posts)
    userlike.decrement("likes")
    /*await Posts.update({ likes: like - 1 }, {
      where: {
        id: idpost
      }
    });*/
    userbannedlike.splice(userIndex,1)
    res.redirect(req.get('referer'));
  }
  else{
    userlike.increment("likes")
    userbannedlike.push(iduser)
    console.log(userbannedlike)
    //like(idpost, Posts)
    /*await Posts.update({ likes: like + 1 }, {
      where: {
        id: idpost
      }
    });*/
    res.redirect(req.get('referer'));
  }
});


router.get('/adddislikepost/:dislike/:iduser', async function(req, res, next) {
  var idpost = req.params.dislike
  var iduser = req.params.iduser
  var userdislike = await Posts.findByPk(idpost)
  var userIndex = userbanneddislike.indexOf("iduser")
  if(userbannedlike[0] == iduser){
    console.log("SAPO PEPE Y LA RE OCNCHA DETU MADRE PELOTUDO TE VOY A ENCONTARAR VAS A VER CAGON")
    userdislike.decrement("dislikes")
    //typediscount(idpost, dislike, Posts)
    /*await Posts.update({ dislikes: dislike - 1 }, {
      where: {
        id: idpost
      }
    });*/
    userbanneddislike.splice(userIndex,1)
    res.redirect(req.get('referer'));
  }
  else{
    userdislike.increment("dislikes")
    userbanneddislike.push(iduser)
    //typeaddcount(idpost, dislike, Posts)
    /*await Posts.update({ dislikes: dislike + 1 }, {
      where: {
        id: idpostf
      }
    });*/
    res.redirect(req.get('referer'))
  }
});

router.get('/addlikecomment/:likecomment/:iduser', async function(req, res, next) {
  var idcomment = req.params.likecomment
  var iduser = req.params.iduser
  var comments = await getcomments();
  var likecomment = comments[idcomment - 1].likes;
  var userIndex = userbanneddislikecomment.indexOf("1")
  if(userIndex+1 == iduser){
    //typediscount(idcomment, likecomment, Comments)
    userbanneddislikecomment.splice(userIndex,1)
    res.redirect(req.get('referer'));
  }
  else{
    userbanneddislikecomment.push(iduser)
    //typeaddcount(idcomment, likecomment, Comments)
    res.redirect(req.get('referer'))
  }


  /*await Comments.update({ likes: likecomment + 1 }, {
    where: {
      id: idcomment
    }
  });
  res.redirect(req.get('referer'));*/
});

router.get('/adddislikecomment/:dislikecomment', async function(req, res, next) {
  var idcomment = req.params.dislikecomment
  var comments = await getcomments();
  var dislikecomment = comments[idcomment - 1].dislikes;
  await Comments.update({ dislikes: dislikecomment + 1 }, {
    where: {
      id: idcomment
    }
  });
  res.redirect(req.get('referer'));
});

router.get('/foro/:idPage/:all', async function(req, res, next) {
  var filter = req.params.all
  const publications = await getposts();
  var recentpublications = await getrecentposts();
  res.render('foro', {publications, recentpublications, filter})
});

  router.get('/crearpublicacion', async function(req, res, next) {
    await countPosts()
  res.render('crearpublicacion')
});

module.exports = router;

async function countPosts(){
  const count = await Posts.count();
} 