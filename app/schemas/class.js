var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var paperSchema = new Schema({
   class_id:Number,
   class_sec:String,
   class_performance: [],
   class_teacher_id:String
}, {collection: 'devsoc'});
module.exports = mongoose.model('Paper', paperSchema)
