module.exports = function(app,db){
    app.get('/getTopics',(req,res)=>{
      list = {"Physics":["NLM","Electric Charges","Gravity"],
      "History":["Ancient civilisations","Roman empire","Modern history"],
      "Geography":["Planet earth","India","Agriculture"]}

      res.send(list)  
  }
}
