const ClassModel = require('../schemas/class');
const StudentModel = require('../schemas/student');
const request = require('request');
module.exports = function(app,db){
    app.get('/getClassPerformance',(req,res)=>{
      var id = req.query.id;
      StudentModel.find({id}).then(stds=>{
        var list = stds[];
        request.post(url,json=true,},(err, ures, ubody)=>{
          ClassModel.findOneAndUpdate({
            id,
          },{$set:{class_performance:ubody.p}})
          .then((r)=>{
            res.send(r);
          })
          .catch(err=>{

          });
      })
    })
  }
}
