var mongoose = require('mongoose');

var teacherSchema = mongoose.Schema({
  cfor: {
    type: String,
    required:true,
    unique: true
  },
  coname: {
    type: String,
    required:true,
    unique: true
  },
  cocode: {
    type: String,
    required:true,
    unique: true
  },
  coc: {
    type: Number,
    required:true
  },
  sem: {
    type: String,
    required:true
  }
    
});



module.exports = mongoose.model('course', teacherSchema);
