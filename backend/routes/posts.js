const express = require('express')
const router = express.Router()

// les middleWare permettent d'externaliser et
//de globaliser la logique du traitement d'une requête
const verifyParams = require('../middleware/verifyParams');

//importer les fonctions du contrôleur des routes pour posts/
const postCtrl = require('../controllers/posts');

// route /post/
router.get('/', postCtrl.list );

// route /post/:id
router.get('/:id', verifyParams, postCtrl.getOnePost);

// route /post/new  POST (new post)
router.post('/new', postCtrl.newPost);

// route /post/:id PUT (modify post)
router.put('/:id',verifyParams, postCtrl.modifyPost);

//rout /post/:id DELETE
router.delete('/:id', verifyParams, postCtrl.deletePost);

module.exports = router
