const Comment = require('../models/Comment');


exports.list = () => {
  // on interroge la base de donnée
  return Comment.find();
}