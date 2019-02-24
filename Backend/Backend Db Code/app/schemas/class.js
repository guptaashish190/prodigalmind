var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var classSchema = new Schema({
   class_sec:String,
   class_teacher_id:String,
   class_performance:Number
}, {collection: 'Class'});
module.exports = mongoose.model('Classs', classSchema)
