//link to the data source which is in friends.js
var friends = require("../data/friends");



//Routing

module.exports = function(app) {

  //API GET Request
  //initiated whenever a user "visits" respective pages
  //In which case we display JSON formatted data on the browser
  app.get("/api/friends", function(req, res) {
    //console.log(friends);
    res.json(friends);
  });

  //API post request
  app.post("/api/friends", function(req, res) {

    //convert the scores into an array
    var scoresArray = req.body.scores.split("");
    
    //add the new friend into the existing array of friends
    friends.push(
    {
      name : req.body.name,
      photo : req.body.photo,
      scores : scoresArray
    }
      );
    //res.json({name : "John Snow", photo : "https://i.pinimg.com/564x/80/38/ac/8038aca316ab5150c7a53945ad02153d.jpg"});
    res.json(findCompatibleFriend(scoresArray));
  });
};

function findCompatibleFriend(scores) {
  //initialize a matching friend to the first friend as a place holder
  var compatibleFriend = friends[1].name;

  //and also use his/her photo link as the initial photo link
  var photo = friends[1].photo;

  //create a variable called lowest total difference, initialize to 100
  var lowestTotalDifference = 100;

  //iterate through all existng friends
  friends.forEach(function(element, index) {
    //initialize a local variable called total difference to 0
    var totalDifference = 0;

    //compare the current user's scores against each friend by taking the differences of each score
    element.scores.forEach(function(element, index) {
      //the total difference increments per iteration
      totalDifference += Math.abs(element - scores[index]);
    });

    //if the current total difference < lowest total difference
    if (totalDifference < lowestTotalDifference) {
      //set lowest total difference = current total difference
      lowestTotalDifference = totalDifference;
      //set the compatible friend = current friend
      compatibleFriend = element.name;
      //and set the photo link to his/her photo link
      photo = element.photo
    }
  });

  //return the matching friend and the photo (as an object)
  return {name : compatibleFriend, photo : photo};
}
