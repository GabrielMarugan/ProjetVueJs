const express = require('express')
const router = express.Router()

// les middleWare permettent d'externaliser et
//de globaliser la logique du traitement d'une requête
const verifyParams = require('../middleware/verifyParams');

//importer les fonctions du contrôleur des routes pour users/
const userCtrl = require('../controllers/users');

// route /user/
router.get('/', userCtrl.list );

// route /user/:id
router.get('/:id', verifyParams, userCtrl.getOneUser);

// route /user/  POST (new User)
router.post('/', userCtrl.newUser);

// route /user/signin/ POST
router.post('/signin', userCtrl.signIn);

// route /user/:id PUT (modify User)
router.put('/:id',verifyParams, userCtrl.modifyUser);

//rout /user/:id DELETE
router.delete('/:id', verifyParams, userCtrl.deleteUser);

module.exports = router
