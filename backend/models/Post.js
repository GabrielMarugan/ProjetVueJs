const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String},
  content: { type: String},
  pseudo: { type: String },
  photo: { type: String },
  creator: { type: String },
  createdAt: {type: Date},
  updatedAt: {type : Date, default: Date.now },
  deletedAt: {type: Date}
  
},{versionKey: false}
  // {_id: false, timestamp: false}
);

module.exports = mongoose.model('Post', postSchema);