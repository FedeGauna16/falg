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
    comment: newcomment.comment,
    likes: 0,
    dislikes: 0
  });
  await Userscomments.create({
    commentid: comment.id, 
    userid: newcomment.iduser
  });
  res.send({
    status : true
  });
});

router.get('/addlikepost/:like/:iduser', async function(req, res, next) {
  var idpost = req.params.like
  var iduser = req.params.iduser
  var userlike = await Posts.findByPk(idpost)
  var userIndex = userbannedlike.indexOf("iduser")
  if(userbannedlike[0] == iduser){
    userlike.decrement("likes")
    userbannedlike.splice(userIndex,1)
    res.redirect(req.get('referer'));
  }
  else{
    userlike.increment("likes")
    userbannedlike.push(iduser)
    res.redirect(req.get('referer'));
  }
});


router.get('/adddislikepost/:dislike/:iduser', async function(req, res, next) {
  var idpost = req.params.dislike
  var iduser = req.params.iduser
  var userdislike = await Posts.findByPk(idpost)
  var userIndex = userbanneddislike.indexOf("iduser")
  if(userbanneddislike[0] == iduser){
    userdislike.decrement("dislikes")
    userbanneddislike.splice(userIndex,1)
    res.redirect(req.get('referer'));
  }
  else{
    userdislike.increment("dislikes")
    userbanneddislike.push(iduser)
    res.redirect(req.get('referer'))
  }
});

router.get('/addlikecomment/:likecomment', async function(req, res, next) {
  var userid = req.app.locals.userlogged
  var idcomment = req.params.likecomment
  var likecomment = await Comments.findByPk(idcomment)
  var userIndex = userbannedlikecomment.indexOf("iduser")
  if(userbannedlikecomment[0] == userid.id){
    likecomment.decrement("likes")
    userbannedlikecomment.splice(userIndex,1)
    res.redirect(req.get('referer'));
  }
  else{
    userbannedlikecomment.push(userid.id)
    likecomment.increment("likes")
    res.redirect(req.get('referer'))
  }
});

router.get('/adddislikecomment/:dislikecomment', async function(req, res, next) {
  var userid = req.app.locals.userlogged
  var idcomment = req.params.dislikecomment
  var dislikecomment = await Comments.findByPk(idcomment)
  var userIndex = userbanneddislikecomment.indexOf("iduser")
  if(userbanneddislikecomment[0] == userid.id){
    dislikecomment.decrement("dislikes")
    userbanneddislikecomment.splice(userIndex,1)
    res.redirect(req.get('referer'));
  }
  else{
    userbanneddislikecomment.push(userid.id)
    dislikecomment.increment("dislikes")
    res.redirect(req.get('referer'))
  }
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