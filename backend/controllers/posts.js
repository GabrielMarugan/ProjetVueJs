const Post = require('../models/Post');
const { genericCtrl } = require("../helpers/ctrlHelper");
const postServices = require("../services/postsService.js");


//contrôleur de la route GET /user/
exports.list = async (req, res) => {
    // return genericCtrl(req, res, async () => {
    try {
      const posts = await postServices.list();
      if (posts) res.status(200).json(posts);
    } catch (e) {
      console.error(e);
      res.status(400).json(e);
    }
    // });
  }

//contrôleur de la route GET /post/:id
exports.getOnePost = (req, res) => {
  // on interroge la base de donnée
  Post.findOne({
    _id: req.params.id
  }).then((post) => {
    // si il a des données, on les renvoie en JSON
    res.status(200).json(post)
    // en cas d'erreur on capture le message d'erreur pour l'aficher dans la réponse en JSON
  }).catch(error => res.status(400).json({ error }))
}

/* ==========================================================================================
                  POST
============================================================================================= */

//contrôleur de la route POST /post/new
exports.newPost = async (req, res) => {
  if(!req.body.form) {
      // si il y a une erreur on interrompt l'opération...
      res.status(400).json({ error: 'Les paramètres sont manquant.' })
    }
  
    //si tout va bien
    //on crée un nouveau document Mongo avec le model User
    const post = new Post({
      title: req.body.form.title, 
      content: req.body.form.content,
      photo: req.body.form.photo,
      createdAt: req.body.form.createdAt,
      creator: req.body.form.id_user//ici on passe les données envoyées dans le body de la requête post
    })
  
    //sauvegarde en BDD, retourne la donnée sauvegardée
    post.save().then(() => {
  
      // retourne la réponse au format JSON
      //le status code 201 indique que la ressource a bien été créée
      res.status(201).json({
        message: 'post crée !'
      })
    // en cas d'erreur à l'enregistrement en BDD...
    }).catch(error => res.status(400).json({ error }))
  }


/* ==========================================================================================
                  PUT
============================================================================================= */

//contrôleur de la route PUT /post/:id
exports.modifyPost = (req, res) => {
  //mise à jour de l'élément en BDD
  Post.updateOne({ _id: req.params.id },{ ...req.body.form })
  .then(() => {
    // retourne la réponse au format JSON
    //le status code 201 indique que la ressource a bien été créée
    res.status(201).json({
      message: 'Post modifié !'
    })
  // en cas d'erreur à l'enregistrement en BDD...
  }).catch(error => res.status(400).json({ error }))
}

/* ==========================================================================================
                  DELETE
============================================================================================= */

//contrôleur de la route DELETE /post/:id
exports.deletePost = (req, res) => {
  // on interroge la base de donnée
  Post.deleteOne({
    _id: req.params.id
  }).then((post) => {
    // si user est trouvée, on la supprime, puis renvoie un message de confirmation
    res.status(201).json({
      message: 'Post supprimée'
    })
    // en cas d'erreur on capture le message d'erreur pour l'aficher dans la réponse en JSON
  }).catch(error => res.status(400).json({ error }))
}


