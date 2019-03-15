var mongoose = require('mongoose');

var batchSchema = mongoose.Schema({
  dname: {
    type: String,
    unique: true,
    require: true
  },
  sno: {
    type: Number,
    require: true
  },
  tno: {
    type: Number,
    require: true
  },
  active: {
    type: String,
    require: true
  },
  pos: {
    type: Number,
    unique: true,
    require: true
  }
    
});



module.exports = mongoose.model('department', batchSchema);
