const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./app/config/db');
let db;
const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ useNewUrlParser: true }));
app.use(bodyParser.json());

require('./app/routes')(app, {});

mongoose.connect(config.url, function (err) {
   if (err) throw err;
   console.log('Successfully connected');
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});


// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err)
//   db1 = database.db("mydb")
//   require('./app/routes')(app, database);
//   app.listen(port, () => {
//     console.log('We are live on ' + port);
//   });
// })
