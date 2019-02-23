var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var paperSchema = new Schema({
   paper_id: Number,
   paper_subject: String,
   paper_topics: [String],
   paper_marks: [Number],
   q_num: Number,
   student:[Object]
}, {collection: 'devsoc'});
module.exports = mongoose.model('Paper', paperSchema)
