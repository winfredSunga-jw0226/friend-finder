# friend-finder

## App Details

This app finds one a matching friend based on a compatibility algorithm. A user fills out a form, providing his/her name, link to a photo and responds to 10 statements by providing a score - 1 representing strong feeling in favor of the statement up to 5 represting a strong feeling against it.

Upon submission, the server runs a logic to compare the user's scores against other user's scores in the database. The user is then introduced to a user that he/she is compatible with - name and picture beging provided.

### Give it a Try

Want to give it a try? If so, go ahead and click on the link --> [Friend Finder](https://morning-forest-68535.herokuapp.com/)

## **Technical Details**

### Client-side Tech
  * HTML 
  * Bootstrap - grid system, form, glyphicon and modal popup 
  * Javascript
  * jQuery - button click event, dynamic population/clearing off of html elements

### Server-side Tech 
  * Javascript
  * Node.js
  * Express.js - used to listen for html and api routing requests using either the GET and POST methods
  * Body Parser - parses data to its proper JSON format
