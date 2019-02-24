var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var paperSchema = new Schema({
   student_id: Number,
   student_name: String,
   class_id:String,
   student_marks: [Object]
}, {collection: 'Student'});
module.exports = mongoose.model(  'Paper', paperSchema)
