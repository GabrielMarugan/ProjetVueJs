const mongoose = require('mongoose')

const newPostSchema = mongoose.Schema({
  post: {type: ObjectId},
  user: {type: ObjectId},

  
},{versionKey: false}
  // {_id: false, timestamp: false}
);

module.exports = mongoose.model('NewPost', newPostSchema);