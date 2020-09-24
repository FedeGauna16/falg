var express = require('express');
var router = express.Router();
var tablas = require("../models");
var Users = tablas.Users;
var Posts = tablas.Posts;
var Comments = tablas.Comments;
var Userscomments = tablas.Userscomments
var Usersposts = tablas.Usersposts
let views = 0;

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

router.post('/publicaciones/', async function(req, res, next) {
  var newpost = req.body;
  var posts = await getposts();
  var post = await Posts.create({
    title: newpost.title,
    description: newpost.description,
    iduser: newpost.iduser
  });
  await Usersposts.create({
    postid: post.id, 
    userid: newpost.iduser
  });
  res.send({
    status : true,
    response : posts
  });
});

router.get('/goToPage/:idPage', async function(req, res, next) {
    var id = req.params.idPage
    res.render('foro', { id })
  });

router.get('/irpublicacion/:idpublicacion', async function(req, res, next) {
  var posts = await getposts();
  var comments = await getcomments();
  var lengthcomments = comments.length
  var idpublicacion = req.params.idpublicacion;
  var publicacion = posts.find(publicacion => {
    return(publicacion.id == idpublicacion);
  });
  var comentario = comments.filter(comentario => {
    return(comentario.idpost == idpublicacion);
  });
  res.render('publicacionusuario', {publicacion, comentario, lengthcomments})
  views++;// Si se entra a una misma publicacion se sigue sumando los views, no quiero hacer que cuando publicacion que se bloquee o algo asi
  //no hay una mejor forma mas linda sin tener qe hacerlo con el ++ y el bloqueo ese?
  //alta paja hacerlo ahora chapotear despues
  console.log("visitas")
  console.log(views)
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

router.post('/addlikepost', async function(req, res, next) {
  var idpost = req.body.idpost;
  var posts = await getposts();
  var like = posts[idpost - 1].likes;
  await Posts.update({ likes: like + 1 }, {
    where: {
      id: idpost
    }
  });
  res.send({
    status : true
  });
});

router.get('/addlikecomment/:likecomment', async function(req, res, next) {
  var idcomment = req.params.likecomment
  //var idcomment = req.body.idcomment;
  var comments = await getcomments();
  console.log(idcomment)
  console.log("sapo pepe y la re concha de tu madre pelotudo de mierda")
  console.log(comments[idcomment -1].likes)
  console.log(comments)
  var likecomment = comments[idcomment - 1].likes;
  await Comments.update({ likes: likecomment + 1 }, {
    where: {
      id: idcomment
    }
  });
  res.redirect(req.get('referer'));
});

router.get('/foro/:idPage', async function(req, res, next) {
  const publications = await getposts();
  res.render('foro', {publications})
});

router.get('/crearpublicacion', function(req, res, next) {
  res.render('crearpublicacion')
});

module.exports = router;