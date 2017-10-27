//dependencies
//use the path package to get the correct file path for our html
var path = require("path");

//Routing

//export this function to be used by server.js 
module.exports = function(app) {

  //Below are listeners fpr HTML GET requests 

  //when the requested route is the root
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //when the requested route is the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //when there is no matching route, default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}