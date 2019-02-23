const PaperModel = require('../schemas/paper');
module.exports = function(app,db){

  app.get('/getPaper',(req,res)=>{
    let row = {};
    row.papers_array = [{}];
    PaperModel.find({}).then(papers=>{
        papers.forEach((paper,i,array)=>{
        row.papers_array[i] = {};
        row.papers_array[i].subject = paper.paper_subject;
        row.papers_array[i].topics = paper.paper_topics;
        row.papers_array[i].marks = paper.paper_marks;
        console.log(row);
      });
      res.send(row);
    }).catch(err=>{
      console.log(err);
    })
  });

  app.get('/getResults',(req,res)=>{
    let row = [];

    PaperModel.find({}).then((papers)=>{
        papers.forEach((paper,i)=>{
        row[i] = paper.student;
      });
        res.send(row)
    })

  });
}
