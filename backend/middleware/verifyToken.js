const verifyToken = (req, res, next) => {
    if(!req.body.token){
      res.status(400).json({ error: 'aucun token detecté' })
    } else {
      
      next()
    }
    // si je ne fais pas next, le server n'envoie pas de réponse !!!
  }
  
  
  module.exports = verifyToken