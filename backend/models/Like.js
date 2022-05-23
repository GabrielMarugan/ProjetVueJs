const mongoose = require('mongoose')

const likeSchema = mongoose.Schema({
  post: {type: ObjectId},
  user: {type: ObjectId}

  
},{versionKey: false}
  // {_id: false, timestamp: false}
);

module.exports = mongoose.model('Like', likeSchema);