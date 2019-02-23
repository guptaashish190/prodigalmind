const noteRoutes = require('./upload_paper_route');
const getData = require('./getData');

module.exports = function(app, db) {
  noteRoutes(app, db);
  getData(app,db);
  // Other route groups could go here, in the future
};
