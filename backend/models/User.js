const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true},
  password: { type: String, required: true, minlength: 6, select: false},
  firstname: { type: String },
  lastname: { type: String },
  photo: { type: String },
  createdAt: {type: Date},
  updatedAt: {type : Date, default: Date.now},
  deletedAt: {type: Date}
  
},{versionKey: false}
  // {_id: false, timestamp: false}
);

module.exports = mongoose.model('User', userSchema);