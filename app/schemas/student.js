var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var paperSchema = new Schema({
   student_id: Number,
   student_name: String,
   class_id:Number,
   student_performance: [],
   student_marks: [Object]
}, {collection: 'devsoc'});
module.exports = mongoose.model('Paper', paperSchema)
