var mongoose = require('mongoose');

var batchSchema = mongoose.Schema({
  emarks: {
    type: Number,
    required: true,
    unique: true
    
  },
  ename: {
    type: String,
    required: true
  },
  cname: {
    type: String,
    required: true,
    unique: true
  },
  ccode: {
    type: String,
    required: true,
    unique: true
  },
  rno: {
    type: Number,
    required: true
  }
    
});



module.exports = mongoose.model('exam', batchSchema);
