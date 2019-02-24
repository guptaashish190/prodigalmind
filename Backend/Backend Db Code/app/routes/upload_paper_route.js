const PaperModel = require('../schemas/paper');

module.exports = function(app, db) {
  app.post('/uploadPaper', (req, res) => {
    // You'll create your note here.
    //Insert paper into database
    var paper_id = req.body.paper_id;
    var q_num = req.body.q_num;
    var student = req.body.student;
    var paper_subject = req.body.paper_subject;
    var paper_topics = req.body.paper_topics;
    var paper_marks = req.body.paper_marks;
    let paper = new PaperModel({
      paper_id,
      paper_subject,
      paper_topics,
      q_num,
      paper_marks,  
      student
    })

    paper.save()
      .then(doc => {
        console.log(doc)
        res.send("hello")
      })
      .catch(err => {
         console.error(err)
       })

  });
};
