//dependencies
var express = require("express");
var bodyParser = require("body-parser");

//nitialize the Express App
var app = express();

//assign a port 
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//====================================== 
//Routers

//this handles the html routing
require("./app/routing/apiRoutes")(app);

//this handles the api routing
require("./app/routing/htmlRoutes")(app);

//=======================================


//start the server, begin listening
app.listen(port, function() {
  console.log("Listening at PORT : " + port);
});