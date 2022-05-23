const express = require('express')
const router = express.Router()

// les middleWare permettent d'externaliser et
//de globaliser la logique du traitement d'une requête
const verifyParams = require('../middleware/verifyParams');

//importer les fonctions du contrôleur des routes pour posts/
const commentCtrl = require('../controllers/comments');

// route /comment/
router.get('/', commentCtrl.list );

// route /comment/:id
router.get('/:id', verifyParams, commentCtrl.getOneComment);

// route /comment/new  POST (new comment)
router.post('/new', commentCtrl.newComment);

// route /comment/:id PUT (modify comment)
router.put('/:id',verifyParams, commentCtrl.modifyComment);

//route /comment/:id DELETE
router.delete('/:id', verifyParams, commentCtrl.deleteComment);

module.exports = router
