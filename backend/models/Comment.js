const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
  title: { type: String},
  content: { type: String},
  post: {type: String},
  creator: {type: String},
  createdAt: {type: Date},
  updatedAt: {type : Date, default: Date.now },
  deletedAt: {type: Date}
  
},{versionKey: false}
  // {_id: false, timestamp: false}
);

module.exports = mongoose.model('Comment', commentSchema);