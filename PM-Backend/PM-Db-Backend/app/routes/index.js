const noteRoutes = require('./upload_paper_route');
const getData = require('./getData');
//const getClassPerformance = require('./getClassPerformance')
module.exports = function(app, db) {
  noteRoutes(app, db);
  getData(app,db);
  //getClassPerformance(app,db);
  // Other route groups could go here, in the future
};
