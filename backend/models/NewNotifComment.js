const mongoose = require('mongoose')

const newComSchema = mongoose.Schema({
  comment: {type: ObjectId},
  user: {type: ObjectId}

  
},{versionKey: false}
  // {_id: false, timestamp: false}
);

module.exports = mongoose.model('NewComment', newComSchema);