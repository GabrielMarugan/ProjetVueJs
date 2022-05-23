const Post = require('../models/Post');


exports.list = () => {
  // on interroge la base de donnée
  return Post.find();
}