const User = require('../models/User');
const { genericCtrl } = require("../helpers/ctrlHelper");
const userServices = require("../services/usersService.js");


//contrôleur de la route GET /user/
exports.list = async (req, res) => {
    // return genericCtrl(req, res, async () => {
    try {
      const users = await userServices.list();
      if (users) res.status(200).json(users);
    } catch (e) {
      console.error(e);
      res.status(400).json(e);
    }
    // });
  }

//contrôleur de la route GET /user/:id
exports.getOneUser = (req, res) => {
  // on interroge la base de donnée
  User.findOne({
    _id: req.params.id
  }).then((user) => {
    // si il a des données, on les renvoie en JSON
    res.status(200).json(user)
    // en cas d'erreur on capture le message d'erreur pour l'aficher dans la réponse en JSON
  }).catch(error => res.status(400).json({ error }))
}

/* ==========================================================================================
                  POST
============================================================================================= */

//contrôleur de la route POST /user/
exports.newUser = async (req, res) => {
  if(!req.body.form) {
      // si il y a une erreur on interrompt l'opération...
      res.status(400).json({ error: 'Les paramètres sont manquant.' })
    }
  
    //si tout va bien
    //on recherche si l'email est deja enregistrer
    User.findOne({email: req.body.form.email},{password:1,email:1}).then(async (user) =>{
      if (user===null){


            //on crée un nouveau document Mongo avec le model User
            const user = new User({
              email: req.body.form.email, 
              password: req.body.form.password //ici on passe les données envoyées dans le body de la requête post
            })
  
            //sauvegarde en BDD, retourne la donnée sauvegardée
            //traitement du mot de passe avant la sauvgarde
            user.password = await userServices.hashPassword(user.password);
            user.save().then(() => {
        
            // retourne la réponse au format JSON
            //le status code 201 indique que la ressource a bien été créée
            res.status(201).json({
              message: 'user crée !',
              _id: user._id
            })
            // en cas d'erreur à l'enregistrement en BDD...
            }).catch(error => res.status(400).json({ error }))
          }
      else{
        //l'email exist deja
        res.status(403).json ({message:"email existant!"})
      }
  })
}


/* ==========================================================================================
                  PUT
============================================================================================= */

//contrôleur de la route PUT /users/:id
exports.modifyUser = async (req, res) => {
  //mise à jour de l'élément en BDD

  if (req.body.form.password) {
    req.body.form.password = await userServices.hashPassword(req.body.form.password);
  };

  User.updateOne({ _id: req.params.id },{ ...req.body.form })
  .then(() => {
    // retourne la réponse au format JSON
    //le status code 201 indique que la ressource a bien été créée
    res.status(201).json({
      message: 'User modifié !'
    })
  // en cas d'erreur à l'enregistrement en BDD...
  }).catch(error => res.status(400).json({ error }))
}

/* ==========================================================================================
                  DELETE
============================================================================================= */

//contrôleur de la route DELETE /user/:id
exports.deleteUser = (req, res) => {
  // on interroge la base de donnée
  User.deleteOne({
    _id: req.params.id
  }).then((user) => {
    // si user est trouvée, on la supprime, puis renvoie un message de confirmation
    res.status(201).json({
      message: 'User supprimée'
    })
    // en cas d'erreur on capture le message d'erreur pour l'aficher dans la réponse en JSON
  }).catch(error => res.status(400).json({ error }))
}

exports.softDeleteUser = (req, res) => {
  // on interroge la base de donnée
  User.updateOne({ _id: req.params.id },{ 
    ...{ firstname: "Anonymous",
         lastname: "",
         photo: "",
         deletedAt: Date.now}})
  .then(() => {
    // retourne la réponse au format JSON
    //le status code 201 indique que la ressource a bien été créée
    res.status(201).json({
      message: 'User soft deleted !'
    })
  // en cas d'erreur à l'enregistrement en BDD...
  }).catch(error => res.status(400).json({ error }))
}

exports.signIn = (req, res) => {
  //verifier si l'utilisateur existe
  User.findOne({email: req.body.form.email},{password:1,email:1}).then(async (user) =>{
    if (user){
      //touver
      //on doit comparer les mots de passe
      const passOk = await userServices.comparePasswords(req.body.form.password, user.password);
      console.log(`ok : ${passOk}`);
      if ( passOk )
        {
          //mot de passe ok
          delete user.password;
          res.status(200).json({...user,token: userServices.createToken(user) });
        }
      else {
          res.status(403).json({message: 'user or password incorrect'});
      }
      
  }
  else {
    res.status(400).json({message: 'utilisateur inconnue'});
  }
  }).catch(error => res.status(400).json({error}))
}